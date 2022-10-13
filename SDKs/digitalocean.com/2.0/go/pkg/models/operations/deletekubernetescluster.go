package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteKubernetesClusterPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type DeleteKubernetesClusterRequest struct {
	PathParams DeleteKubernetesClusterPathParams
}

type DeleteKubernetesCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteKubernetesClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteKubernetesCluster401ApplicationJSONObject           *DeleteKubernetesCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
