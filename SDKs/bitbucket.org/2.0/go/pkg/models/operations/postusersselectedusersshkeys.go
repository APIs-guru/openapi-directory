package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersSelectedUserSSHKeysPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type PostUsersSelectedUserSSHKeysSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostUsersSelectedUserSSHKeysRequest struct {
	PathParams PostUsersSelectedUserSSHKeysPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostUsersSelectedUserSSHKeysSecurity
}

type PostUsersSelectedUserSSHKeysResponse struct {
	ContentType   string
	StatusCode    int64
	Error         map[string]interface{}
	SSHAccountKey map[string]interface{}
}
