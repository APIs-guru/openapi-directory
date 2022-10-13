package operations

import (
	"openapi/pkg/models/shared"
)

type ListTiers200ApplicationJSONTiers struct {
	BuildSeconds         *string `json:"build_seconds"`
	EgressBandwidthBytes *string `json:"egress_bandwidth_bytes"`
	Name                 *string `json:"name"`
	Slug                 *string `json:"slug"`
	StorageBytes         *string `json:"storage_bytes"`
}

type ListTiers200ApplicationJSON struct {
	Tiers []ListTiers200ApplicationJSONTiers `json:"tiers"`
}

type ListTiers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListTiersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListTiers200ApplicationJSONObject                         *ListTiers200ApplicationJSON
	ListTiers401ApplicationJSONObject                         *ListTiers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
