package operations

import (
	"openapi/pkg/models/shared"
)

type RecycleKubernetesNodePoolPathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=cluster_id"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
}

type RecycleKubernetesNodePoolRequest struct {
	PathParams RecycleKubernetesNodePoolPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type RecycleKubernetesNodePool401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type RecycleKubernetesNodePoolResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	RecycleKubernetesNodePool401ApplicationJSONObject         *RecycleKubernetesNodePool401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
