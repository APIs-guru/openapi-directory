package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsAddOrUpdateMembershipForUserLegacyPathParams struct {
	TeamID   int64  `pathParam:"style=simple,explode=false,name=team_id"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum string

const (
	TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnumMember     TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum = "member"
	TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnumMaintainer TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum = "maintainer"
)

type TeamsAddOrUpdateMembershipForUserLegacyRequestBody struct {
	Role *TeamsAddOrUpdateMembershipForUserLegacyRequestBodyRoleEnum `json:"role,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Field    *string `json:"field,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSON struct {
	DocumentationURL *string                                                           `json:"documentation_url,omitempty"`
	Errors           []TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONErrors `json:"errors,omitempty"`
	Message          *string                                                           `json:"message,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserLegacyRequest struct {
	PathParams TeamsAddOrUpdateMembershipForUserLegacyPathParams
	Request    *TeamsAddOrUpdateMembershipForUserLegacyRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateMembershipForUserLegacyResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	BasicError                                                      *shared.BasicError
	TeamMembership                                                  *shared.TeamMembership
	TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSONObject *TeamsAddOrUpdateMembershipForUserLegacy422ApplicationJSON
}
