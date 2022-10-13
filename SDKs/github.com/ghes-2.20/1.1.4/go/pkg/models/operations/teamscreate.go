package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreatePathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type TeamsCreateRequestBodyPermissionEnum string

const (
	TeamsCreateRequestBodyPermissionEnumPull  TeamsCreateRequestBodyPermissionEnum = "pull"
	TeamsCreateRequestBodyPermissionEnumPush  TeamsCreateRequestBodyPermissionEnum = "push"
	TeamsCreateRequestBodyPermissionEnumAdmin TeamsCreateRequestBodyPermissionEnum = "admin"
)

type TeamsCreateRequestBodyPrivacyEnum string

const (
	TeamsCreateRequestBodyPrivacyEnumSecret TeamsCreateRequestBodyPrivacyEnum = "secret"
	TeamsCreateRequestBodyPrivacyEnumClosed TeamsCreateRequestBodyPrivacyEnum = "closed"
)

type TeamsCreateRequestBody struct {
	Description  *string                               `json:"description"`
	Maintainers  []string                              `json:"maintainers"`
	Name         string                                `json:"name"`
	ParentTeamID *int64                                `json:"parent_team_id"`
	Permission   *TeamsCreateRequestBodyPermissionEnum `json:"permission"`
	Privacy      *TeamsCreateRequestBodyPrivacyEnum    `json:"privacy"`
	RepoNames    []string                              `json:"repo_names"`
}

type TeamsCreateRequest struct {
	PathParams TeamsCreatePathParams
	Request    *TeamsCreateRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	TeamFull        *shared.TeamFull
	ValidationError *shared.ValidationError
}
