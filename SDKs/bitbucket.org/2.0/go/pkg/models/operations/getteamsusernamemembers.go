package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameMembersPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameMembersSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
