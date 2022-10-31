package operations

import (
	"openapi/pkg/models/shared"
)

type ResetAuthPathParams struct {
	DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
	Username            string `pathParam:"style=simple,explode=false,name=username"`
}

type ResetAuthRequestBody struct {
	MysqlSettings *shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings `json:"mysql_settings,omitempty"`
}

type ResetAuthRequest struct {
	PathParams ResetAuthPathParams
	Request    ResetAuthRequestBody `request:"mediaType=application/json"`
}

type ResetAuth200ApplicationJSON struct {
	User shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems `json:"user"`
}

type ResetAuth401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ResetAuthResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ResetAuth200ApplicationJSONObject                         *ResetAuth200ApplicationJSON
	ResetAuth401ApplicationJSONObject                         *ResetAuth401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
