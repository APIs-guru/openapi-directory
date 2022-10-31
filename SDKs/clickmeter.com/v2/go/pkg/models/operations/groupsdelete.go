package operations

import (
"openapi/pkg/models/shared")

type GroupsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GroupsDeleteRequest struct {
    PathParams GroupsDeletePathParams 
    
}

type GroupsDeleteResponse struct {
    APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

