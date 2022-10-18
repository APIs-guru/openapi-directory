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

type OptionsProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail,omitempty"`
	Error      *string  `json:"error,omitempty"`
	Message    *string  `json:"message,omitempty"`
	Ref        *string  `json:"ref,omitempty"`
	StatusCode *float64 `json:"status_code,omitempty"`
	TypeName   *string  `json:"type_name,omitempty"`
}

type OptionsProxyResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	OptionsProxy200ApplicationJSONAny     *interface{}
	OptionsProxy401ApplicationJSONObject  *OptionsProxy401ApplicationJSON
	OptionsProxyDefaultApplicationJSONAny *interface{}
}
