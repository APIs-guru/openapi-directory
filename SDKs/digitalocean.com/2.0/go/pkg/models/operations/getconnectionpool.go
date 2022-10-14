package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionPoolPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	PoolName            string `pathParam:"style=simple,explode=false,name=pool_name"`
}

type GetConnectionPoolRequest struct {
	PathParams GetConnectionPoolPathParams
}

type GetConnectionPool200ApplicationJSON struct {
	Pool shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems `json:"pool"`
}

type GetConnectionPool401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetConnectionPoolResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetConnectionPool200ApplicationJSONObject                 *GetConnectionPool200ApplicationJSON
	GetConnectionPool401ApplicationJSONObject                 *GetConnectionPool401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
