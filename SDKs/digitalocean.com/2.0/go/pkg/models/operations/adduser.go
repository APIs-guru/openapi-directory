package operations

import (
"openapi/pkg/models/shared")

type AddUserPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    
}

type AddUserRequest struct {
    PathParams AddUserPathParams 
    Request shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems `request:"mediaType=application/json"`
    
}

type AddUser201ApplicationJSON struct {
    User shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems `json:"user"`
    
}

type AddUser401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type AddUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AddUser201ApplicationJSONObject *AddUser201ApplicationJSON 
    AddUser401ApplicationJSONObject *AddUser401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

