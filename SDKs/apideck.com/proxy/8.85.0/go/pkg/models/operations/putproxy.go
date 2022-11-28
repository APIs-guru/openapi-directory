package operations

import (
	"openapi/pkg/models/shared"
)

type PutProxyHeaders struct {
	XApideckAppID                   string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"style=simple,explode=false,name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"style=simple,explode=false,name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type PutProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail,omitempty"`
	Error      *string  `json:"error,omitempty"`
	Message    *string  `json:"message,omitempty"`
	Ref        *string  `json:"ref,omitempty"`
	StatusCode *float64 `json:"status_code,omitempty"`
	TypeName   *string  `json:"type_name,omitempty"`
}

type PutProxyRequest struct {
	Headers  PutProxyHeaders
	Request  []byte `request:"mediaType=*/*"`
	Security PutProxySecurity
}

type PutProxyResponse struct {
	ContentType                       string
	Headers                           map[string][]string
	StatusCode                        int64
	PutProxy200ApplicationJSONAny     *interface{}
	PutProxy401ApplicationJSONObject  *PutProxy401ApplicationJSON
	PutProxyDefaultApplicationJSONAny *interface{}
}
