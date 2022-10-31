package operations

import (
"openapi/pkg/models/shared")

type ReposGetAllStatusCheckContextsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetAllStatusCheckContextsRequest struct {
    PathParams ReposGetAllStatusCheckContextsPathParams 
    
}

type ReposGetAllStatusCheckContextsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ReposGetAllStatusCheckContexts200ApplicationJSONStrings []string 
    
}

