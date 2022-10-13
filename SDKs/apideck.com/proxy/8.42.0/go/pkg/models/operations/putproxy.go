package operations

import (
	"openapi/pkg/models/shared"
)

type PutProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type PutProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
	PutProxy401ApplicationJSONAny     *interface{}
	PutProxyDefaultApplicationJSONAny *interface{}
}
