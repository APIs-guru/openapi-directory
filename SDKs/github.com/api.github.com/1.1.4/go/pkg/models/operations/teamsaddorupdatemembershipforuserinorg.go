package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsAddOrUpdateMembershipForUserInOrgPathParams struct {
	Org      string `pathParam:"style=simple,explode=false,name=org"`
	TeamSlug string `pathParam:"style=simple,explode=false,name=team_slug"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum string

const (
	TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMember     TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum = "member"
	TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnumMaintainer TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum = "maintainer"
)

type TeamsAddOrUpdateMembershipForUserInOrgRequestBody struct {
	Role *TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum `json:"role,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Field    *string `json:"field,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON struct {
	Errors  []TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors `json:"errors,omitempty"`
	Message *string                                                          `json:"message,omitempty"`
}

type TeamsAddOrUpdateMembershipForUserInOrgRequest struct {
	PathParams TeamsAddOrUpdateMembershipForUserInOrgPathParams
	Request    *TeamsAddOrUpdateMembershipForUserInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateMembershipForUserInOrgResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	TeamMembership                                                 *shared.TeamMembership
	TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONObject *TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON
}
