package operations

import (
"openapi/pkg/models/shared")

type FromListPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type FromListRequest struct {
    PathParams FromListPathParams 
    
}

type FromListResponse struct {
    ContentType string 
    IPSources []shared.IPSource 
    StatusCode int64 
    
}

