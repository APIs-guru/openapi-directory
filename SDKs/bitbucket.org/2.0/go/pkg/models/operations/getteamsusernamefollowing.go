package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameFollowingPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameFollowingSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetTeamsUsernameFollowingSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetTeamsUsernameFollowingSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameFollowingSecurity struct {
	Option1 *GetTeamsUsernameFollowingSecurityOption1 `security:"option"`
	Option2 *GetTeamsUsernameFollowingSecurityOption2 `security:"option"`
	Option3 *GetTeamsUsernameFollowingSecurityOption3 `security:"option"`
}

type GetTeamsUsernameFollowingRequest struct {
	PathParams GetTeamsUsernameFollowingPathParams
	Security   GetTeamsUsernameFollowingSecurity
}

type GetTeamsUsernameFollowingResponse struct {
	ContentType    string
	StatusCode     int64
	Error          map[string]interface{}
	PaginatedUsers *shared.PaginatedUsers
}
