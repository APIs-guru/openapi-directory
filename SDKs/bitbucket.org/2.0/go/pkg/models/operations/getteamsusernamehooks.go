package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameHooksPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameHooksSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameHooksRequest struct {
	PathParams GetTeamsUsernameHooksPathParams
	Security   GetTeamsUsernameHooksSecurity
}

type GetTeamsUsernameHooksResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWebhookSubscriptions *shared.PaginatedWebhookSubscriptions
}
