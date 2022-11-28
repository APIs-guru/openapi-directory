package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsUsernameHooksPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostTeamsUsernameHooksSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostTeamsUsernameHooksRequest struct {
	PathParams PostTeamsUsernameHooksPathParams
	Security   PostTeamsUsernameHooksSecurity
}

type PostTeamsUsernameHooksResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
