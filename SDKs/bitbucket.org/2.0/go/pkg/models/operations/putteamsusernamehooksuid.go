package operations

import (
	"openapi/pkg/models/shared"
)

type PutTeamsUsernameHooksUIDPathParams struct {
	UID      string `pathParam:"style=simple,explode=false,name=uid"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PutTeamsUsernameHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutTeamsUsernameHooksUIDRequest struct {
	PathParams PutTeamsUsernameHooksUIDPathParams
	Security   PutTeamsUsernameHooksUIDSecurity
}

type PutTeamsUsernameHooksUIDResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
