package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateKubernetesClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type UpdateKubernetesClusterRequestBody struct {
	AutoUpgrade       *bool                                                                                                                                           `json:"auto_upgrade"`
	MaintenancePolicy *shared.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicy `json:"maintenance_policy"`
	Name              string                                                                                                                                          `json:"name"`
	SurgeUpgrade      *bool                                                                                                                                           `json:"surge_upgrade"`
	Tags              []string                                                                                                                                        `json:"tags"`
}

type UpdateKubernetesClusterRequest struct {
	PathParams UpdateKubernetesClusterPathParams
	Request    UpdateKubernetesClusterRequestBody `request:"mediaType=application/json"`
}

type UpdateKubernetesCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateKubernetesClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateKubernetesCluster202ApplicationJSONAny              *interface{}
	UpdateKubernetesCluster401ApplicationJSONObject           *UpdateKubernetesCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
