package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserEmailsEmailPathParams struct {
	Email string `pathParam:"style=simple,explode=false,name=email"`
}

type GetUserEmailsEmailSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserEmailsEmailRequest struct {
	PathParams GetUserEmailsEmailPathParams
	Security   GetUserEmailsEmailSecurity
}

type GetUserEmailsEmailResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
