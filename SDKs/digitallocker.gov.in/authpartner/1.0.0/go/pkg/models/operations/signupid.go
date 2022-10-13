package operations

import (
	"openapi/pkg/models/shared"
)

type SignUpIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type SignUpIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security SignUpIDSecurity
}

type SignUpID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type SignUpID500ApplicationJSON struct {
	Error            *interface{} `json:"error"`
	ErrorDescription *interface{} `json:"error_description"`
}

type SignUpIDResponse struct {
	ContentType                      string
	DemoAuthResponse                 *interface{}
	SignUpID400ApplicationJSONOneOf  *interface{}
	SignUpID401ApplicationJSONObject *SignUpID401ApplicationJSON
	SignUpID500ApplicationJSONObject *SignUpID500ApplicationJSON
	StatusCode                       int64
}
