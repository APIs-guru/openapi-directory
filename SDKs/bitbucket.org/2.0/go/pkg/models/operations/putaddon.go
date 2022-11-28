package operations

import (
	"openapi/pkg/models/shared"
)

type PutAddonSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutAddonRequest struct {
	Security PutAddonSecurity
}

type PutAddonResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
