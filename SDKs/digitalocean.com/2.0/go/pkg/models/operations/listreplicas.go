package operations

import (
	"openapi/pkg/models/shared"
)

type ListReplicasPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type ListReplicasRequest struct {
	PathParams ListReplicasPathParams
}

type ListReplicas401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListReplicasResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListReplicas200ApplicationJSONAny                         *interface{}
	ListReplicas401ApplicationJSONObject                      *ListReplicas401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
