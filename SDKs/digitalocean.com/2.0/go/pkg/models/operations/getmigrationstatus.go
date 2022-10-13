package operations

import (
	"openapi/pkg/models/shared"
)

type GetMigrationStatusPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type GetMigrationStatusRequest struct {
	PathParams GetMigrationStatusPathParams
}

type GetMigrationStatus200ApplicationJSON struct {
	CreatedAt *string `json:"created_at"`
	ID        *string `json:"id"`
	Status    *string `json:"status"`
}

type GetMigrationStatus401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetMigrationStatusResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetMigrationStatus200ApplicationJSONObject                *GetMigrationStatus200ApplicationJSON
	GetMigrationStatus401ApplicationJSONObject                *GetMigrationStatus401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
