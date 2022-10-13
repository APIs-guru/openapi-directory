package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersSelectedUserHooksUIDPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
	UID          string `pathParam:"style=simple,explode=false,name=uid"`
}

type DeleteUsersSelectedUserHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteUsersSelectedUserHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteUsersSelectedUserHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteUsersSelectedUserHooksUIDSecurity struct {
	Option1 *DeleteUsersSelectedUserHooksUIDSecurityOption1 `security:"option"`
	Option2 *DeleteUsersSelectedUserHooksUIDSecurityOption2 `security:"option"`
	Option3 *DeleteUsersSelectedUserHooksUIDSecurityOption3 `security:"option"`
}

type DeleteUsersSelectedUserHooksUIDRequest struct {
	PathParams DeleteUsersSelectedUserHooksUIDPathParams
	Security   DeleteUsersSelectedUserHooksUIDSecurity
}

type DeleteUsersSelectedUserHooksUIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
