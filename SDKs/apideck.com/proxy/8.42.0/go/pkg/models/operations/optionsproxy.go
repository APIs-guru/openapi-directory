package operations

import (
	"openapi/pkg/models/shared"
)

type OptionsProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type OptionsProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OptionsProxyRequest struct {
	Headers  OptionsProxyHeaders
	Security OptionsProxySecurity
}

type OptionsProxyResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	OptionsProxy200ApplicationJSONAny     *interface{}
	OptionsProxy401ApplicationJSONAny     *interface{}
	OptionsProxyDefaultApplicationJSONAny *interface{}
}
