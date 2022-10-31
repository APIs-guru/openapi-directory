package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	Username            string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
}

type GetUser200ApplicationJSON struct {
	User shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems `json:"user"`
}

type GetUser401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetUserResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetUser200ApplicationJSONObject                           *GetUser200ApplicationJSON
	GetUser401ApplicationJSONObject                           *GetUser401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
