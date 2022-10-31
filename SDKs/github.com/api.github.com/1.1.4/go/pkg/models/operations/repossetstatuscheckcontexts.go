package operations

import (
"openapi/pkg/models/shared")

type ReposSetStatusCheckContextsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposSetStatusCheckContextsRequestBody struct {
    Contexts []string `json:"contexts"`
    
}

type ReposSetStatusCheckContextsRequest struct {
    PathParams ReposSetStatusCheckContextsPathParams 
    Request *ReposSetStatusCheckContextsRequestBody `request:"mediaType=application/json"`
    
}

type ReposSetStatusCheckContextsResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ReposSetStatusCheckContexts200ApplicationJSONStrings []string 
    ValidationError *shared.ValidationError 
    
}

