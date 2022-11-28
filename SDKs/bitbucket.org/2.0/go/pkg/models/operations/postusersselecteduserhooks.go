package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersSelectedUserHooksPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type PostUsersSelectedUserHooksSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostUsersSelectedUserHooksRequest struct {
	PathParams PostUsersSelectedUserHooksPathParams
	Security   PostUsersSelectedUserHooksSecurity
}

type PostUsersSelectedUserHooksResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
