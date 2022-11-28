package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProxyHeaders struct {
	XApideckAppID                   string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID              string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckDownstreamAuthorization *string `header:"style=simple,explode=false,name=x-apideck-downstream-authorization"`
	XApideckDownstreamURL           string  `header:"style=simple,explode=false,name=x-apideck-downstream-url"`
	XApideckServiceID               string  `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DeleteProxySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteProxy401ApplicationJSON struct {
	Detail     *string  `json:"detail,omitempty"`
	Error      *string  `json:"error,omitempty"`
	Message    *string  `json:"message,omitempty"`
	Ref        *string  `json:"ref,omitempty"`
	StatusCode *float64 `json:"status_code,omitempty"`
	TypeName   *string  `json:"type_name,omitempty"`
}

type DeleteProxyRequest struct {
	Headers  DeleteProxyHeaders
	Security DeleteProxySecurity
}

type DeleteProxyResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	StatusCode                           int64
	DeleteProxy200ApplicationJSONAny     *interface{}
	DeleteProxy401ApplicationJSONObject  *DeleteProxy401ApplicationJSON
	DeleteProxyDefaultApplicationJSONAny *interface{}
}
