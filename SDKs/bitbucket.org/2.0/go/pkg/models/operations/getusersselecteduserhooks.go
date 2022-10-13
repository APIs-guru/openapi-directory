package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserHooksPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetUsersSelectedUserHooksSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUsersSelectedUserHooksSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUsersSelectedUserHooksSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersSelectedUserHooksSecurity struct {
	Option1 *GetUsersSelectedUserHooksSecurityOption1 `security:"option"`
	Option2 *GetUsersSelectedUserHooksSecurityOption2 `security:"option"`
	Option3 *GetUsersSelectedUserHooksSecurityOption3 `security:"option"`
}

type GetUsersSelectedUserHooksRequest struct {
	PathParams GetUsersSelectedUserHooksPathParams
	Security   GetUsersSelectedUserHooksSecurity
}

type GetUsersSelectedUserHooksResponse struct {
	ContentType                   string
	StatusCode                    int64
	Error                         map[string]interface{}
	PaginatedWebhookSubscriptions *shared.PaginatedWebhookSubscriptions
}
