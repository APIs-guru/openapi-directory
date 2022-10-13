package operations

import (
	"openapi/pkg/models/shared"
)

type GetKubernetesClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type GetKubernetesClusterRequest struct {
	PathParams GetKubernetesClusterPathParams
}

type GetKubernetesCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetKubernetesClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetKubernetesCluster200ApplicationJSONAny                 *interface{}
	GetKubernetesCluster401ApplicationJSONObject              *GetKubernetesCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
