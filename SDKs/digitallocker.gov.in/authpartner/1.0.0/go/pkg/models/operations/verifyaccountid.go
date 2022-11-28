package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyAccountIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type VerifyAccountID400ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type VerifyAccountID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type VerifyAccountID500ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type VerifyAccountIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security VerifyAccountIDSecurity
}

type VerifyAccountIDResponse struct {
	ContentType                             string
	StatusCode                              int64
	VerifyAccountID400ApplicationJSONObject *VerifyAccountID400ApplicationJSON
	VerifyAccountID401ApplicationJSONObject *VerifyAccountID401ApplicationJSON
	VerifyAccountID500ApplicationJSONObject *VerifyAccountID500ApplicationJSON
	VerifyAccountResponse                   *shared.VerifyAccountResponse
}
