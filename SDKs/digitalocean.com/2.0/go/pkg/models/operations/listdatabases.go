package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatabasesPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type ListDatabasesRequest struct {
	PathParams ListDatabasesPathParams
}

type ListDatabases401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDatabasesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDatabases200ApplicationJSONAny                        *interface{}
	ListDatabases401ApplicationJSONObject                     *ListDatabases401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
