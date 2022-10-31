package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUsernameMembersPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUsersUsernameMembersSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUsersUsernameMembersSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUsersUsernameMembersSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersUsernameMembersSecurity struct {
	Option1 *GetUsersUsernameMembersSecurityOption1 `security:"option"`
	Option2 *GetUsersUsernameMembersSecurityOption2 `security:"option"`
	Option3 *GetUsersUsernameMembersSecurityOption3 `security:"option"`
}

type GetUsersUsernameMembersRequest struct {
	PathParams GetUsersUsernameMembersPathParams
	Security   GetUsersUsernameMembersSecurity
}

type GetUsersUsernameMembersResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	User        map[string]interface{}
}
