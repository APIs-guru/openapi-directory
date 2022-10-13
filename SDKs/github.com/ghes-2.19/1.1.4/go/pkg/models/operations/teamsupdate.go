package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdatePathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateRequestBodyPermissionEnum string

const (
	TeamsUpdateRequestBodyPermissionEnumPull  TeamsUpdateRequestBodyPermissionEnum = "pull"
	TeamsUpdateRequestBodyPermissionEnumPush  TeamsUpdateRequestBodyPermissionEnum = "push"
	TeamsUpdateRequestBodyPermissionEnumAdmin TeamsUpdateRequestBodyPermissionEnum = "admin"
)

type TeamsUpdateRequestBodyPrivacyEnum string

const (
	TeamsUpdateRequestBodyPrivacyEnumSecret TeamsUpdateRequestBodyPrivacyEnum = "secret"
	TeamsUpdateRequestBodyPrivacyEnumClosed TeamsUpdateRequestBodyPrivacyEnum = "closed"
)

type TeamsUpdateRequestBody struct {
	Description  *string                               `json:"description"`
	Name         *string                               `json:"name"`
	ParentTeamID *int64                                `json:"parent_team_id"`
	Permission   *TeamsUpdateRequestBodyPermissionEnum `json:"permission"`
	Privacy      *TeamsUpdateRequestBodyPrivacyEnum    `json:"privacy"`
}

type TeamsUpdateRequest struct {
	PathParams TeamsUpdatePathParams
	Request    *TeamsUpdateRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	TeamFull    *shared.TeamFull
}
