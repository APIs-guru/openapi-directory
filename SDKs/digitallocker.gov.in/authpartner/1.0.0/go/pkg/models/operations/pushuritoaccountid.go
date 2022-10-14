package operations

import (
	"openapi/pkg/models/shared"
)

type PushURIToAccountIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type PushURIToAccountIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security PushURIToAccountIDSecurity
}

type PushURIToAccountID400ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type PushURIToAccountID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type PushURIToAccountID404ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type PushURIToAccountID500ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type PushURIToAccountIDResponse struct {
	ContentType                                string
	PushURIToAccountID400ApplicationJSONObject *PushURIToAccountID400ApplicationJSON
	PushURIToAccountID401ApplicationJSONObject *PushURIToAccountID401ApplicationJSON
	PushURIToAccountID404ApplicationJSONObject *PushURIToAccountID404ApplicationJSON
	PushURIToAccountID500ApplicationJSONObject *PushURIToAccountID500ApplicationJSON
	Sample                                     *interface{}
	StatusCode                                 int64
}
