package operations

import (
	"openapi/pkg/models/shared"
)

type GetCdnEndpointPathParams struct {
	CdnID string `pathParam:"style=simple,explode=false,name=cdn_id"`
}

type GetCdnEndpointRequest struct {
	PathParams GetCdnEndpointPathParams
}

type GetCdnEndpoint401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetCdnEndpointResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetCdnEndpoint200ApplicationJSONAny                       *interface{}
	GetCdnEndpoint401ApplicationJSONObject                    *GetCdnEndpoint401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
