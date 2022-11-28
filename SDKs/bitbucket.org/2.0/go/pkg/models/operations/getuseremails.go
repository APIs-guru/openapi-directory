package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserEmailsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserEmailsRequest struct {
	Security GetUserEmailsSecurity
}

type GetUserEmailsResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
