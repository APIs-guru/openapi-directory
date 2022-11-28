package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameHooksUIDPathParams struct {
	UID      string `pathParam:"style=simple,explode=false,name=uid"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameHooksUIDRequest struct {
	PathParams GetTeamsUsernameHooksUIDPathParams
	Security   GetTeamsUsernameHooksUIDSecurity
}

type GetTeamsUsernameHooksUIDResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
