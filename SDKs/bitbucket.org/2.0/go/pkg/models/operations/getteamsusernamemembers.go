package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameMembersPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameMembersSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernameMembersSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernameMembersSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameMembersSecurity struct {
	Option1 *GetTeamsUsernameMembersSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernameMembersSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernameMembersSecurityOption3 `security:"option"`
}

type GetTeamsUsernameMembersRequest struct {
	PathParams GetTeamsUsernameMembersPathParams
	Security   GetTeamsUsernameMembersSecurity
}

type GetTeamsUsernameMembersResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	User        map[string]interface{}
}
