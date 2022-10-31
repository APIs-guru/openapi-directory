package operations

import (
	"openapi/pkg/models/shared"
)

type ListDatabaseClustersQueryParams struct {
	TagName *string `queryParam:"style=form,explode=true,name=tag_name"`
}

type ListDatabaseClustersRequest struct {
	QueryParams ListDatabaseClustersQueryParams
}

type ListDatabaseClusters401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDatabaseClustersResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDatabaseClusters200ApplicationJSONAny                 *interface{}
	ListDatabaseClusters401ApplicationJSONObject              *ListDatabaseClusters401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
