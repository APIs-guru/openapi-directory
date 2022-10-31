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
	Description  *string                               `json:"description,omitempty"`
	Name         *string                               `json:"name,omitempty"`
	ParentTeamID *int64                                `json:"parent_team_id,omitempty"`
	Permission   *TeamsUpdateRequestBodyPermissionEnum `json:"permission,omitempty"`
	Privacy      *TeamsUpdateRequestBodyPrivacyEnum    `json:"privacy,omitempty"`
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
