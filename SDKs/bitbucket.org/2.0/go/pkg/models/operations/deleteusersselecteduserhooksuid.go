package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersSelectedUserHooksUIDPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
	UID          string `pathParam:"style=simple,explode=false,name=uid"`
}

type DeleteUsersSelectedUserHooksUIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
