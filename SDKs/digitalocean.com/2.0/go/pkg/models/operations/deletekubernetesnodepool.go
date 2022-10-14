package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteKubernetesNodePoolPathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=cluster_id"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
}

type DeleteKubernetesNodePoolRequest struct {
	PathParams DeleteKubernetesNodePoolPathParams
}

type DeleteKubernetesNodePool401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteKubernetesNodePoolResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteKubernetesNodePool401ApplicationJSONObject          *DeleteKubernetesNodePool401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
