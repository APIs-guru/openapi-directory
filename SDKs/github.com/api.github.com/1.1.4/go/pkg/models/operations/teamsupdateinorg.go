package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsUpdateInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
}

type TeamsUpdateInOrgRequestBodyPermissionEnum string

const (
	TeamsUpdateInOrgRequestBodyPermissionEnumPull  TeamsUpdateInOrgRequestBodyPermissionEnum = "pull"
	TeamsUpdateInOrgRequestBodyPermissionEnumPush  TeamsUpdateInOrgRequestBodyPermissionEnum = "push"
	TeamsUpdateInOrgRequestBodyPermissionEnumAdmin TeamsUpdateInOrgRequestBodyPermissionEnum = "admin"
)

type TeamsUpdateInOrgRequestBodyPrivacyEnum string

const (
	TeamsUpdateInOrgRequestBodyPrivacyEnumSecret TeamsUpdateInOrgRequestBodyPrivacyEnum = "secret"
	TeamsUpdateInOrgRequestBodyPrivacyEnumClosed TeamsUpdateInOrgRequestBodyPrivacyEnum = "closed"
)

type TeamsUpdateInOrgRequestBody struct {
	Description  *string                                    `json:"description,omitempty"`
	Name         *string                                    `json:"name,omitempty"`
	ParentTeamID *int64                                     `json:"parent_team_id,omitempty"`
	Permission   *TeamsUpdateInOrgRequestBodyPermissionEnum `json:"permission,omitempty"`
	Privacy      *TeamsUpdateInOrgRequestBodyPrivacyEnum    `json:"privacy,omitempty"`
}

type TeamsUpdateInOrgRequest struct {
	PathParams TeamsUpdateInOrgPathParams
	Request    *TeamsUpdateInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsUpdateInOrgResponse struct {
	ContentType string
	StatusCode  int64
	TeamFull    *shared.TeamFull
}
