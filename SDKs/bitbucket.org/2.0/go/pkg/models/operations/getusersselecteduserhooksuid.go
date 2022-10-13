package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserHooksUIDPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
	UID          string `pathParam:"style=simple,explode=false,name=uid"`
}

type GetUsersSelectedUserHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUsersSelectedUserHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUsersSelectedUserHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersSelectedUserHooksUIDSecurity struct {
	Option1 *GetUsersSelectedUserHooksUIDSecurityOption1 `security:"option"`
	Option2 *GetUsersSelectedUserHooksUIDSecurityOption2 `security:"option"`
	Option3 *GetUsersSelectedUserHooksUIDSecurityOption3 `security:"option"`
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
