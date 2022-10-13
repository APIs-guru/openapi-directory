package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatabaseFirewallsPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type ListDatabaseFirewallsRequest struct {
	PathParams ListDatabaseFirewallsPathParams
}

type ListDatabaseFirewalls401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDatabaseFirewallsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDatabaseFirewalls200ApplicationJSONAny                *interface{}
	ListDatabaseFirewalls401ApplicationJSONObject             *ListDatabaseFirewalls401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
