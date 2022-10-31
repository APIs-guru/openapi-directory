package operations

import (
"openapi/pkg/models/shared")

type DeleteRepositoryTagPathParams struct {
    RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    RepositoryTag string `pathParam:"style=simple,explode=false,name=repository_tag"`
    
}

type DeleteRepositoryTagRequest struct {
    PathParams DeleteRepositoryTagPathParams 
    
}

type DeleteRepositoryTag401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteRepositoryTagResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteRepositoryTag401ApplicationJSONObject *DeleteRepositoryTag401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

