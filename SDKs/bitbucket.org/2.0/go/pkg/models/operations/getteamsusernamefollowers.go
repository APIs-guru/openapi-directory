package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameFollowersPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameFollowersSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernameFollowersSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernameFollowersSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameFollowersSecurity struct {
	Option1 *GetTeamsUsernameFollowersSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernameFollowersSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernameFollowersSecurityOption3 `security:"option"`
}

type GetTeamsUsernameFollowersRequest struct {
	PathParams GetTeamsUsernameFollowersPathParams
	Security   GetTeamsUsernameFollowersSecurity
}

type GetTeamsUsernameFollowersResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedUsers *shared.PaginatedUsers
}
