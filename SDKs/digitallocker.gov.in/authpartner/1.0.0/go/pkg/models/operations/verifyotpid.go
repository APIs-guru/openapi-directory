package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyOtpIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type VerifyOtpIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security VerifyOtpIDSecurity
}

type VerifyOtpID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type VerifyOtpID500ApplicationJSON struct {
	Error            *interface{} `json:"error"`
	ErrorDescription *interface{} `json:"error_description"`
}

type VerifyOtpIDResponse struct {
	ContentType                         string
	DemoAuthVerifyResponse              *interface{}
	StatusCode                          int64
	VerifyOtpID400ApplicationJSONOneOf  *interface{}
	VerifyOtpID401ApplicationJSONObject *VerifyOtpID401ApplicationJSON
	VerifyOtpID500ApplicationJSONObject *VerifyOtpID500ApplicationJSON
}
