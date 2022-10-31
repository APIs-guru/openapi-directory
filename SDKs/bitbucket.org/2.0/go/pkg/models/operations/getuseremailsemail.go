package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserEmailsEmailPathParams struct {
	Email string `pathParam:"style=simple,explode=false,name=email"`
}

type GetUserEmailsEmailSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetUserEmailsEmailSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUserEmailsEmailSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserEmailsEmailSecurity struct {
	Option1 *GetUserEmailsEmailSecurityOption1 `security:"option"`
	Option2 *GetUserEmailsEmailSecurityOption2 `security:"option"`
	Option3 *GetUserEmailsEmailSecurityOption3 `security:"option"`
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
