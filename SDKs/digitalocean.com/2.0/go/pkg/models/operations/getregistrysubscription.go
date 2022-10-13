package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistrySubscription401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetRegistrySubscriptionResponse struct {
	ContentType                                                                                              string
	Headers                                                                                                  map[string][]string
	StatusCode                                                                                               int64
	GetRegistrySubscription401ApplicationJSONObject                                                          *GetRegistrySubscription401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema                                                *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
	Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1 *shared.Onev21registryGetResponses200ContentApplication1jsonSchemaPropertiesRegistryPropertiesSubscriptionAllOf1
}
