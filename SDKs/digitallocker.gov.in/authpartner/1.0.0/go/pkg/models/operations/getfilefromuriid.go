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

type GetFileFromURIID400ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetFileFromURIID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetFileFromURIID404ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetFileFromURIIDRequest struct {
	PathParams GetFileFromURIIDPathParams
	Security   GetFileFromURIIDSecurity
}

type GetFileFromURIIDResponse struct {
	ContentType                              string
	GetFileFromURIID200ApplicationPdfString  *string
	GetFileFromURIID200ImageJpegString       *string
	GetFileFromURIID200ImageJpgString        *string
	GetFileFromURIID200ImagePngString        *string
	GetFileFromURIID400ApplicationJSONObject *GetFileFromURIID400ApplicationJSON
	GetFileFromURIID401ApplicationJSONObject *GetFileFromURIID401ApplicationJSON
	GetFileFromURIID404ApplicationJSONObject *GetFileFromURIID404ApplicationJSON
	GetFileFromURIID500ApplicationJSONOneOf  *interface{}
	GetFileFromURIID503ApplicationJSONOneOf  *interface{}
	StatusCode                               int64
}
