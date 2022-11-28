package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersSelectedUserSSHKeysPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetUsersSelectedUserSSHKeysSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUsersSelectedUserSSHKeysRequest struct {
	PathParams GetUsersSelectedUserSSHKeysPathParams
	Security   GetUsersSelectedUserSSHKeysSecurity
}

type GetUsersSelectedUserSSHKeysResponse struct {
	ContentType          string
	StatusCode           int64
	Error                map[string]interface{}
	PaginatedSSHUserKeys *shared.PaginatedSSHUserKeys
}
