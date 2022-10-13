package operations

import (
	"openapi/pkg/models/shared"
)

type ListAllDropletNeighborsIds200ApplicationJSON struct {
	NeighborIds [][]int64 `json:"neighbor_ids"`
}

type ListAllDropletNeighborsIds401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListAllDropletNeighborsIdsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllDropletNeighborsIds200ApplicationJSONObject        *ListAllDropletNeighborsIds200ApplicationJSON
	ListAllDropletNeighborsIds401ApplicationJSONObject        *ListAllDropletNeighborsIds401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
