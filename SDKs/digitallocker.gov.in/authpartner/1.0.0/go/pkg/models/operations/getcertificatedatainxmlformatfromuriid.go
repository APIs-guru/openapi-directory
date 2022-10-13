package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificateDataInXMLFormatFromURIIDPathParams struct {
	URI string `pathParam:"style=simple,explode=false,name=uri"`
}

type GetCertificateDataInXMLFormatFromURIIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetCertificateDataInXMLFormatFromURIIDRequest struct {
	PathParams GetCertificateDataInXMLFormatFromURIIDPathParams
	Security   GetCertificateDataInXMLFormatFromURIIDSecurity
}

type GetCertificateDataInXMLFormatFromURIID400ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetCertificateDataInXMLFormatFromURIID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetCertificateDataInXMLFormatFromURIID404ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetCertificateDataInXMLFormatFromURIIDResponse struct {
	Body                                                           []byte
	ContentType                                                    string
	GetCertificateDataInXMLFormatFromURIID400ApplicationJSONObject *GetCertificateDataInXMLFormatFromURIID400ApplicationJSON
	GetCertificateDataInXMLFormatFromURIID401ApplicationJSONObject *GetCertificateDataInXMLFormatFromURIID401ApplicationJSON
	GetCertificateDataInXMLFormatFromURIID404ApplicationJSONObject *GetCertificateDataInXMLFormatFromURIID404ApplicationJSON
	GetCertificateDataInXMLFormatFromURIID500ApplicationJSONOneOf  *interface{}
	GetCertificateDataInXMLFormatFromURIID503ApplicationJSONOneOf  *interface{}
	StatusCode                                                     int64
}
