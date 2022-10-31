package operations

import (
	"openapi/pkg/models/shared"
)

type GetEAadhaarDataInXMLFormatIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetEAadhaarDataInXMLFormatIDRequest struct {
	Security GetEAadhaarDataInXMLFormatIDSecurity
}

type GetEAadhaarDataInXMLFormatID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type GetEAadhaarDataInXMLFormatID404ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type GetEAadhaarDataInXMLFormatIDResponse struct {
	Body                                                 []byte
	ContentType                                          string
	GetEAadhaarDataInXMLFormatID401ApplicationJSONObject *GetEAadhaarDataInXMLFormatID401ApplicationJSON
	GetEAadhaarDataInXMLFormatID404ApplicationJSONObject *GetEAadhaarDataInXMLFormatID404ApplicationJSON
	GetEAadhaarDataInXMLFormatID500ApplicationJSONOneOf  *interface{}
	GetEAadhaarDataInXMLFormatID503ApplicationJSONOneOf  *interface{}
	StatusCode                                           int64
}
