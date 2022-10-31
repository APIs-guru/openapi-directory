package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsersPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type ListUsersRequest struct {
	PathParams ListUsersPathParams
}

type ListUsers401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListUsersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListUsers200ApplicationJSONAny                            *interface{}
	ListUsers401ApplicationJSONObject                         *ListUsers401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
