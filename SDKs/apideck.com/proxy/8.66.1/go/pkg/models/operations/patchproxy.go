package operations

import (
	"openapi/pkg/models/shared"
)

type PatchProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type PatchProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PatchProxyRequest struct {
	Headers  PatchProxyHeaders
	Request  []byte `request:"mediaType=*/*"`
	Security PatchProxySecurity
}

type PatchProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail"`
	Error      *string  `json:"error"`
	Message    *string  `json:"message"`
	Ref        *string  `json:"ref"`
	StatusCode *float64 `json:"status_code"`
	TypeName   *string  `json:"type_name"`
}

type PatchProxyResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	StatusCode                          int64
	PatchProxy200ApplicationJSONAny     *interface{}
	PatchProxy401ApplicationJSONObject  *PatchProxy401ApplicationJSON
	PatchProxyDefaultApplicationJSONAny *interface{}
}
