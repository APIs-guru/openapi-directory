package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceCodeIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type GetDeviceCodeIDRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security GetDeviceCodeIDSecurity
}

type GetDeviceCodeID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetDeviceCodeIDResponse struct {
	ContentType                             string
	DeviceAuthorizationCodeResponse         *shared.DeviceAuthorizationCodeResponse
	GetDeviceCodeID400ApplicationJSONOneOf  *interface{}
	GetDeviceCodeID401ApplicationJSONObject *GetDeviceCodeID401ApplicationJSON
	GetDeviceCodeID500ApplicationJSONOneOf  *interface{}
	StatusCode                              int64
}
