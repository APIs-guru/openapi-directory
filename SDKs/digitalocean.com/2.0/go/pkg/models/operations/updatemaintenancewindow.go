package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMaintenanceWindowPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type UpdateMaintenanceWindowRequest struct {
	PathParams UpdateMaintenanceWindowPathParams
	Request    shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesMaintenanceWindowAllOf0 `request:"mediaType=application/json"`
}

type UpdateMaintenanceWindow401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateMaintenanceWindowResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateMaintenanceWindow401ApplicationJSONObject           *UpdateMaintenanceWindow401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
