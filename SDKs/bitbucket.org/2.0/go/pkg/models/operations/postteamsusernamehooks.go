package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsUsernameHooksPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostTeamsUsernameHooksSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostTeamsUsernameHooksSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PostTeamsUsernameHooksSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostTeamsUsernameHooksSecurity struct {
	Option1 *PostTeamsUsernameHooksSecurityOption1 `security:"option"`
	Option2 *PostTeamsUsernameHooksSecurityOption2 `security:"option"`
	Option3 *PostTeamsUsernameHooksSecurityOption3 `security:"option"`
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
