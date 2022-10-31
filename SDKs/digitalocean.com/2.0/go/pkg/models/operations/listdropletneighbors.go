package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletNeighborsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletNeighborsRequest struct {
	PathParams ListDropletNeighborsPathParams
}

type ListDropletNeighbors200ApplicationJSON struct {
	Droplets []shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems `json:"droplets,omitempty"`
}

type ListDropletNeighbors401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletNeighborsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletNeighbors200ApplicationJSONObject              *ListDropletNeighbors200ApplicationJSON
	ListDropletNeighbors401ApplicationJSONObject              *ListDropletNeighbors401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
