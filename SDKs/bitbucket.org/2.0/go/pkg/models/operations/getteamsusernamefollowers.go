package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameFollowersPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameFollowersSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
