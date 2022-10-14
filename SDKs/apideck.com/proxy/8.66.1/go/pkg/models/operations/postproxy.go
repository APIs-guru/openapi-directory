package operations

import (
	"openapi/pkg/models/shared"
)

type PostProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type PostProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostProxyRequest struct {
	Headers  PostProxyHeaders
	Request  []byte `request:"mediaType=*/*"`
	Security PostProxySecurity
}

type PostProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail,omitempty"`
	Error      *string  `json:"error,omitempty"`
	Message    *string  `json:"message,omitempty"`
	Ref        *string  `json:"ref,omitempty"`
	StatusCode *float64 `json:"status_code,omitempty"`
	TypeName   *string  `json:"type_name,omitempty"`
}

type PostProxyResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	StatusCode                         int64
	PostProxy200ApplicationJSONAny     *interface{}
	PostProxy401ApplicationJSONObject  *PostProxy401ApplicationJSON
	PostProxyDefaultApplicationJSONAny *interface{}
}
