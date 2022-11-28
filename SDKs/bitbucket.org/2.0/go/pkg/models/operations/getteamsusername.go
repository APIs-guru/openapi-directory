package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernamePathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameRequest struct {
	PathParams GetTeamsUsernamePathParams
	Security   GetTeamsUsernameSecurity
}

type GetTeamsUsernameResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Team        map[string]interface{}
}
