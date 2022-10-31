package operations

import (
"openapi/pkg/models/shared")

type ProtocolTodGetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolTodGetTraceRequest struct {
    PathParams ProtocolTodGetTracePathParams 
    
}

type ProtocolTodGetTraceResponse struct {
    ConfigTod *shared.ConfigTod 
    ContentType string 
    StatusCode int64 
    
}

