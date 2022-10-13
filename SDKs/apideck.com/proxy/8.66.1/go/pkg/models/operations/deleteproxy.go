package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProxyHeaders struct {
	XApideckAppID                   string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"name=x-apideck-service-id"`
}

type DeleteProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteProxyRequest struct {
	Headers  DeleteProxyHeaders
	Security DeleteProxySecurity
}

type DeleteProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail"`
	Error      *string  `json:"error"`
	Message    *string  `json:"message"`
	Ref        *string  `json:"ref"`
	StatusCode *float64 `json:"status_code"`
	TypeName   *string  `json:"type_name"`
}

type DeleteProxyResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	StatusCode                           int64
	DeleteProxy200ApplicationJSONAny     *interface{}
	DeleteProxy401ApplicationJSONObject  *DeleteProxy401ApplicationJSON
	DeleteProxyDefaultApplicationJSONAny *interface{}
}
