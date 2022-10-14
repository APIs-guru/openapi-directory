package operations

import (
	"openapi/pkg/models/shared"
)

type DestroyKubernetesAssociatedResourcesSelectivePathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type DestroyKubernetesAssociatedResourcesSelectiveRequestBody struct {
	LoadBalancers   []string `json:"load_balancers,omitempty"`
	VolumeSnapshots []string `json:"volume_snapshots,omitempty"`
	Volumes         []string `json:"volumes,omitempty"`
}

type DestroyKubernetesAssociatedResourcesSelectiveRequest struct {
	PathParams DestroyKubernetesAssociatedResourcesSelectivePathParams
	Request    DestroyKubernetesAssociatedResourcesSelectiveRequestBody `request:"mediaType=application/json"`
}

type DestroyKubernetesAssociatedResourcesSelective401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DestroyKubernetesAssociatedResourcesSelectiveResponse struct {
	ContentType                                                           string
	Headers                                                               map[string][]string
	StatusCode                                                            int64
	DestroyKubernetesAssociatedResourcesSelective401ApplicationJSONObject *DestroyKubernetesAssociatedResourcesSelective401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema             *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
