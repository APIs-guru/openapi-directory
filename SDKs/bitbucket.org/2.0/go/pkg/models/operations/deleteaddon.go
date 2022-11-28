package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAddonSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAddonRequest struct {
	Security DeleteAddonSecurity
}

type DeleteAddonResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
