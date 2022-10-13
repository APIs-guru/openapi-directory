package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteKubernetesNodePathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=cluster_id"`
	NodeID     string `pathParam:"style=simple,explode=false,name=node_id"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=node_pool_id"`
}

type DeleteKubernetesNodeQueryParams struct {
	Replace   *int64 `queryParam:"style=form,explode=true,name=replace"`
	SkipDrain *int64 `queryParam:"style=form,explode=true,name=skip_drain"`
}

type DeleteKubernetesNodeRequest struct {
	PathParams  DeleteKubernetesNodePathParams
	QueryParams DeleteKubernetesNodeQueryParams
}

type DeleteKubernetesNode401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteKubernetesNodeResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteKubernetesNode401ApplicationJSONObject              *DeleteKubernetesNode401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
