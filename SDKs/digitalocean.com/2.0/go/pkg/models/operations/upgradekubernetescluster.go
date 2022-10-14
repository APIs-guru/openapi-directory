package operations

import (
	"openapi/pkg/models/shared"
)

type UpgradeKubernetesClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type UpgradeKubernetesClusterRequest struct {
	PathParams UpgradeKubernetesClusterPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpgradeKubernetesCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpgradeKubernetesClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpgradeKubernetesCluster401ApplicationJSONObject          *UpgradeKubernetesCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
