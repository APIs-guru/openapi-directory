package operations

import (
	"openapi/pkg/models/shared"
)

type FetchFieldByIDPathParams struct {
	FieldID string `pathParam:"style=simple,explode=false,name=fieldId"`
}

type FetchFieldByIDSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FetchFieldByIDSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchFieldByIDSecurity struct {
	Option1 *FetchFieldByIDSecurityOption1 `security:"option"`
	Option2 *FetchFieldByIDSecurityOption2 `security:"option"`
}

type FetchFieldByIDRequest struct {
	PathParams FetchFieldByIDPathParams
	Security   FetchFieldByIDSecurity
}

type FetchFieldByIDResponse struct {
	ContentType string
	Error       *shared.Error
	Field       *interface{}
	Headers     map[string][]string
	StatusCode  int64
}
