package operations

import (
	"openapi/pkg/models/shared"
)

type DestroyReplicaPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	ReplicaName         string `pathParam:"style=simple,explode=false,name=replica_name"`
}

type DestroyReplicaRequest struct {
	PathParams DestroyReplicaPathParams
}

type DestroyReplica401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DestroyReplicaResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DestroyReplica401ApplicationJSONObject                    *DestroyReplica401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
