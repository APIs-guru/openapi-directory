package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatabasePathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	DatabaseName        string `pathParam:"style=simple,explode=false,name=database_name"`
}

type DeleteDatabaseRequest struct {
	PathParams DeleteDatabasePathParams
}

type DeleteDatabase401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteDatabaseResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteDatabase401ApplicationJSONObject                    *DeleteDatabase401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
