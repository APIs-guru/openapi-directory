package operations

import (
	"openapi/pkg/models/shared"
)

type GetSQLModePathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type GetSQLModeRequest struct {
	PathParams GetSQLModePathParams
}

type GetSQLMode200ApplicationJSON struct {
	SQLMode string `json:"sql_mode"`
}

type GetSQLMode401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetSQLModeResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetSQLMode200ApplicationJSONObject                        *GetSQLMode200ApplicationJSON
	GetSQLMode401ApplicationJSONObject                        *GetSQLMode401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
