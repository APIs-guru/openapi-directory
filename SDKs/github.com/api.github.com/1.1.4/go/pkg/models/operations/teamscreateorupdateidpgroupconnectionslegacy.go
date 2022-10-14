package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups struct {
	Description      *string `json:"description,omitempty"`
	GroupDescription string  `json:"group_description"`
	GroupID          string  `json:"group_id"`
	GroupName        string  `json:"group_name"`
	ID               *string `json:"id,omitempty"`
	Name             *string `json:"name,omitempty"`
}

type TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody struct {
	Groups   []TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups `json:"groups"`
	SyncedAt *string                                                         `json:"synced_at,omitempty"`
}

type TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest struct {
	PathParams TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams
	Request    *TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	GroupMapping    *shared.GroupMapping
	ValidationError *shared.ValidationError
}
