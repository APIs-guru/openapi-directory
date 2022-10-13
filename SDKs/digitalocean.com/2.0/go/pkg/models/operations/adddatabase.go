package operations

import (
	"openapi/pkg/models/shared"
)

type AddDatabasePathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
}

type AddDatabaseRequest struct {
	PathParams AddDatabasePathParams
	Request    shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems `request:"mediaType=application/json"`
}

type AddDatabase201ApplicationJSON struct {
	Db shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1dbsGetResponses200ContentApplication1jsonSchemaPropertiesDbsItems `json:"db"`
}

type AddDatabase401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type AddDatabaseResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddDatabase201ApplicationJSONObject                       *AddDatabase201ApplicationJSON
	AddDatabase401ApplicationJSONObject                       *AddDatabase401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
