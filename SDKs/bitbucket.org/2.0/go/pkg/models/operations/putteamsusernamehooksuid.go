package operations

import (
	"openapi/pkg/models/shared"
)

type PutTeamsUsernameHooksUIDPathParams struct {
	UID      string `pathParam:"style=simple,explode=false,name=uid"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PutTeamsUsernameHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutTeamsUsernameHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutTeamsUsernameHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutTeamsUsernameHooksUIDSecurity struct {
	Option1 *PutTeamsUsernameHooksUIDSecurityOption1 `security:"option"`
	Option2 *PutTeamsUsernameHooksUIDSecurityOption2 `security:"option"`
	Option3 *PutTeamsUsernameHooksUIDSecurityOption3 `security:"option"`
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
