package operations

import (
	"openapi/pkg/models/shared"
)

type ListKubernetesAssociatedResourcesPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type ListKubernetesAssociatedResourcesRequest struct {
	PathParams ListKubernetesAssociatedResourcesPathParams
}

type ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
}

type ListKubernetesAssociatedResources200ApplicationJSON struct {
	LoadBalancers   []ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers                                                                                                    `json:"load_balancers"`
	VolumeSnapshots []shared.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems `json:"volume_snapshots"`
	Volumes         []shared.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems `json:"volumes"`
}

type ListKubernetesAssociatedResources401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListKubernetesAssociatedResourcesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListKubernetesAssociatedResources200ApplicationJSONObject *ListKubernetesAssociatedResources200ApplicationJSON
	ListKubernetesAssociatedResources401ApplicationJSONObject *ListKubernetesAssociatedResources401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
