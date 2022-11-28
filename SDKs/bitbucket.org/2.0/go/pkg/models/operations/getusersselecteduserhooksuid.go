package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserHooksUIDPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
	UID          string `pathParam:"style=simple,explode=false,name=uid"`
}

type GetUsersSelectedUserHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersSelectedUserHooksUIDRequest struct {
	PathParams GetUsersSelectedUserHooksUIDPathParams
	Security   GetUsersSelectedUserHooksUIDSecurity
}

type GetUsersSelectedUserHooksUIDResponse struct {
	ContentType         string
	StatusCode          int64
	Error               map[string]interface{}
	WebhookSubscription map[string]interface{}
}
