package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameFollowingPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameFollowingSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
