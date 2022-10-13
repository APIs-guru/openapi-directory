package operations

import (
	"openapi/pkg/models/shared"
)

type GetFileFromURIIDPathParams struct {
	URI string `pathParam:"style=simple,explode=false,name=uri"`
}

type GetFileFromURIIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetFileFromURIIDRequest struct {
	PathParams GetFileFromURIIDPathParams
	Security   GetFileFromURIIDSecurity
}

type GetFileFromURIID400ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetFileFromURIID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetFileFromURIID404ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetFileFromURIIDResponse struct {
	Body                                     []byte
	ContentType                              string
	GetFileFromURIID400ApplicationJSONObject *GetFileFromURIID400ApplicationJSON
	GetFileFromURIID401ApplicationJSONObject *GetFileFromURIID401ApplicationJSON
	GetFileFromURIID404ApplicationJSONObject *GetFileFromURIID404ApplicationJSON
	GetFileFromURIID500ApplicationJSONOneOf  *interface{}
	GetFileFromURIID503ApplicationJSONOneOf  *interface{}
	StatusCode                               int64
}
