package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomainRequest struct {
	Request *shared.Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItems `request:"mediaType=application/json"`
}

type CreateDomain401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateDomainResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDomain201ApplicationJSONAny                         *interface{}
	CreateDomain401ApplicationJSONObject                      *CreateDomain401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
