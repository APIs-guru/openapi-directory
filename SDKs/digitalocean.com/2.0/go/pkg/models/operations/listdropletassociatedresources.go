package operations

import (
	"openapi/pkg/models/shared"
)

type ListDropletAssociatedResourcesPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletAssociatedResourcesRequest struct {
	PathParams ListDropletAssociatedResourcesPathParams
}

type ListDropletAssociatedResources200ApplicationJSONSnapshots struct {
	Cost *string `json:"cost,omitempty"`
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListDropletAssociatedResources200ApplicationJSON struct {
	Snapshots       []ListDropletAssociatedResources200ApplicationJSONSnapshots                                                                                                  `json:"snapshots,omitempty"`
	VolumeSnapshots []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems `json:"volume_snapshots,omitempty"`
	Volumes         []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems `json:"volumes,omitempty"`
}

type ListDropletAssociatedResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDropletAssociatedResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletAssociatedResources200ApplicationJSONObject    *ListDropletAssociatedResources200ApplicationJSON
	ListDropletAssociatedResources401ApplicationJSONObject    *ListDropletAssociatedResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
