package operations

import (
"openapi/pkg/models/shared")

type GetMibsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetMibsRequest struct {
    PathParams GetMibsPathParams 
    
}

type GetMibsResponse struct {
    ContentType string 
    StatusCode int64 
    Triplets []shared.Triplet 
    
}

