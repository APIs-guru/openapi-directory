package operations

import (
	"openapi/pkg/models/shared"
)

type GetProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type GetProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetProxyRequest struct {
	Headers  GetProxyHeaders
	Security GetProxySecurity
}

type GetProxyResponse struct {
	ContentType                       string
	Headers                           map[string][]string
	StatusCode                        int64
	GetProxy200ApplicationJSONAny     *interface{}
	GetProxy401ApplicationJSONAny     *interface{}
	GetProxyDefaultApplicationJSONAny *interface{}
}
