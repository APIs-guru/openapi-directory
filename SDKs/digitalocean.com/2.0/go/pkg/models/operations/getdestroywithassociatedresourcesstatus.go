package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDestroyWithAssociatedResourcesStatusPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type GetDestroyWithAssociatedResourcesStatusRequest struct {
	PathParams GetDestroyWithAssociatedResourcesStatusPathParams
}

type GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet struct {
	DestroyedAt  *time.Time `json:"destroyed_at"`
	ErrorMessage *string    `json:"error_message"`
	ID           *string    `json:"id"`
	Name         *string    `json:"name"`
}

type GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources struct {
	Snapshots       []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"snapshots"`
	VolumeSnapshots []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"volume_snapshots"`
	Volumes         []shared.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet `json:"volumes"`
}

type GetDestroyWithAssociatedResourcesStatus200ApplicationJSON struct {
	CompletedAt *time.Time                                                          `json:"completed_at"`
	Droplet     *GetDestroyWithAssociatedResourcesStatus200ApplicationJSONDroplet   `json:"droplet"`
	Failures    *int64                                                              `json:"failures"`
	Resources   *GetDestroyWithAssociatedResourcesStatus200ApplicationJSONResources `json:"resources"`
}

type GetDestroyWithAssociatedResourcesStatus401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetDestroyWithAssociatedResourcesStatusResponse struct {
	ContentType                                                     string
	Headers                                                         map[string][]string
	StatusCode                                                      int64
	GetDestroyWithAssociatedResourcesStatus200ApplicationJSONObject *GetDestroyWithAssociatedResourcesStatus200ApplicationJSON
	GetDestroyWithAssociatedResourcesStatus401ApplicationJSONObject *GetDestroyWithAssociatedResourcesStatus401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema       *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
