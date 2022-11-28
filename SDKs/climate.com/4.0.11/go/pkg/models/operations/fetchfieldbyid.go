package operations

import (
	"openapi/pkg/models/shared"
)

type FetchFieldByIDPathParams struct {
	FieldID string `pathParam:"style=simple,explode=false,name=fieldId"`
}

type FetchFieldByIDSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
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
