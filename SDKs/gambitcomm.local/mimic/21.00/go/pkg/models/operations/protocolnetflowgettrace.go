package operations

import (
"openapi/pkg/models/shared")

type ProtocolNetflowGetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolNetflowGetTraceRequest struct {
    PathParams ProtocolNetflowGetTracePathParams 
    
}

type ProtocolNetflowGetTraceResponse struct {
    ConfigNetflow *shared.ConfigNetflow 
    ContentType string 
    StatusCode int64 
    
}

