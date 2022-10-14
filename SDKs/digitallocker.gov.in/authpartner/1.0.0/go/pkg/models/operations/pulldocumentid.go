package operations

import (
	"openapi/pkg/models/shared"
)

type PullDocumentIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PullDocumentIDRequest struct {
	Request  *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
	Security PullDocumentIDSecurity
}

type PullDocumentID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type PullDocumentID404ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type PullDocumentIDResponse struct {
	ContentType                            string
	PullDocumentID400ApplicationJSONOneOf  *interface{}
	PullDocumentID401ApplicationJSONObject *PullDocumentID401ApplicationJSON
	PullDocumentID404ApplicationJSONObject *PullDocumentID404ApplicationJSON
	PullDocumentID500ApplicationJSONOneOf  *interface{}
	Sample                                 *interface{}
	StatusCode                             int64
}
