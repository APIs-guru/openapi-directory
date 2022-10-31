package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsUpdateLegacyRequestBodyPermissionEnum string

const (
	TeamsUpdateLegacyRequestBodyPermissionEnumPull  TeamsUpdateLegacyRequestBodyPermissionEnum = "pull"
	TeamsUpdateLegacyRequestBodyPermissionEnumPush  TeamsUpdateLegacyRequestBodyPermissionEnum = "push"
	TeamsUpdateLegacyRequestBodyPermissionEnumAdmin TeamsUpdateLegacyRequestBodyPermissionEnum = "admin"
)

type TeamsUpdateLegacyRequestBodyPrivacyEnum string

const (
	TeamsUpdateLegacyRequestBodyPrivacyEnumSecret TeamsUpdateLegacyRequestBodyPrivacyEnum = "secret"
	TeamsUpdateLegacyRequestBodyPrivacyEnumClosed TeamsUpdateLegacyRequestBodyPrivacyEnum = "closed"
)

type TeamsUpdateLegacyRequestBody struct {
	Description  *string                                     `json:"description,omitempty"`
	Name         string                                      `json:"name"`
	ParentTeamID *int64                                      `json:"parent_team_id,omitempty"`
	Permission   *TeamsUpdateLegacyRequestBodyPermissionEnum `json:"permission,omitempty"`
	Privacy      *TeamsUpdateLegacyRequestBodyPrivacyEnum    `json:"privacy,omitempty"`
}

type TeamsUpdateLegacyRequest struct {
	PathParams TeamsUpdateLegacyPathParams
	Request    *TeamsUpdateLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateLegacyResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	TeamFull        *shared.TeamFull
	ValidationError *shared.ValidationError
}
