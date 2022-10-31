package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserSSHKeysKeyIDPathParams struct {
	KeyID        string `pathParam:"style=simple,explode=false,name=key_id"`
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetUsersSelectedUserSSHKeysKeyIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUsersSelectedUserSSHKeysKeyIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUsersSelectedUserSSHKeysKeyIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersSelectedUserSSHKeysKeyIDSecurity struct {
	Option1 *GetUsersSelectedUserSSHKeysKeyIDSecurityOption1 `security:"option"`
	Option2 *GetUsersSelectedUserSSHKeysKeyIDSecurityOption2 `security:"option"`
	Option3 *GetUsersSelectedUserSSHKeysKeyIDSecurityOption3 `security:"option"`
}

type GetUsersSelectedUserSSHKeysKeyIDRequest struct {
	PathParams GetUsersSelectedUserSSHKeysKeyIDPathParams
	Security   GetUsersSelectedUserSSHKeysKeyIDSecurity
}

type GetUsersSelectedUserSSHKeysKeyIDResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	SSHAccountKey map[string]interface{}
}
