package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=domain_name"`
}

type GetDomainRequest struct {
	PathParams GetDomainPathParams
}

type GetDomain401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDomainResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDomain200ApplicationJSONAny                            *interface{}
	GetDomain401ApplicationJSONObject                         *GetDomain401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
