package operations

import (
"openapi/pkg/models/shared")

type DeleteUserPathParams struct {
    DatabaseClusterUUID string `pathParam:"style=simple,explode=false,name=database_cluster_uuid"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type DeleteUserRequest struct {
    PathParams DeleteUserPathParams 
    
}

type DeleteUser401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteUser401ApplicationJSONObject *DeleteUser401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

