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
	Role *TeamsAddOrUpdateMembershipForUserInOrgRequestBodyRoleEnum `json:"role"`
}

type TeamsAddOrUpdateMembershipForUserInOrgRequest struct {
	PathParams TeamsAddOrUpdateMembershipForUserInOrgPathParams
	Request    *TeamsAddOrUpdateMembershipForUserInOrgRequestBody `request:"mediaType=application/json"`
}

type TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors struct {
	Code     *string `json:"code"`
	Field    *string `json:"field"`
	Resource *string `json:"resource"`
}

type TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON struct {
	Errors  []TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONErrors `json:"errors"`
	Message *string                                                          `json:"message"`
}

type TeamsAddOrUpdateMembershipForUserInOrgResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	TeamMembership                                                 *shared.TeamMembership
	TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSONObject *TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJSON
}
