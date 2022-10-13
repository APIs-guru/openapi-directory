package operations

import (
	"openapi/pkg/models/shared"
)

type PutAddonSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutAddonSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutAddonSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutAddonSecurity struct {
	Option1 *PutAddonSecurityOption1 `security:"option"`
	Option2 *PutAddonSecurityOption2 `security:"option"`
	Option3 *PutAddonSecurityOption3 `security:"option"`
}

type PutAddonRequest struct {
	Security PutAddonSecurity
}

type PutAddonResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
