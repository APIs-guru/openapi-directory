package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOnlineMigrationPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type UpdateOnlineMigrationRequestBody struct {
	DisableSsl *bool                                                                                                                 `json:"disable_ssl,omitempty"`
	Source     *shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesConnectionAllOf0 `json:"source,omitempty"`
}

type UpdateOnlineMigrationRequest struct {
	PathParams UpdateOnlineMigrationPathParams
	Request    UpdateOnlineMigrationRequestBody `request:"mediaType=application/json"`
}

type UpdateOnlineMigration200ApplicationJSON struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *string `json:"id,omitempty"`
	Status    *string `json:"status,omitempty"`
}

type UpdateOnlineMigration401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateOnlineMigrationResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateOnlineMigration200ApplicationJSONObject             *UpdateOnlineMigration200ApplicationJSON
	UpdateOnlineMigration401ApplicationJSONObject             *UpdateOnlineMigration401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
