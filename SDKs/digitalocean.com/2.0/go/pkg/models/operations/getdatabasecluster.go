package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseClusterPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type GetDatabaseClusterRequest struct {
	PathParams GetDatabaseClusterPathParams
}

type GetDatabaseCluster200ApplicationJSON struct {
	Database shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems `json:"database"`
}

type GetDatabaseCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetDatabaseClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetDatabaseCluster200ApplicationJSONObject                *GetDatabaseCluster200ApplicationJSON
	GetDatabaseCluster401ApplicationJSONObject                *GetDatabaseCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
