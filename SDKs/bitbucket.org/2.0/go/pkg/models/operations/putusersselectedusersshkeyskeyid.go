package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersSelectedUserSSHKeysKeyIDPathParams struct {
	KeyID        string `pathParam:"style=simple,explode=false,name=key_id"`
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type PutUsersSelectedUserSSHKeysKeyIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutUsersSelectedUserSSHKeysKeyIDRequest struct {
	PathParams PutUsersSelectedUserSSHKeysKeyIDPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutUsersSelectedUserSSHKeysKeyIDSecurity
}

type PutUsersSelectedUserSSHKeysKeyIDResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	SSHAccountKey map[string]interface{}
}
