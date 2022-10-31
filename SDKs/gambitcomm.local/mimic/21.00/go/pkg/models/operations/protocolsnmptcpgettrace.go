package operations

import (
"openapi/pkg/models/shared")

type ProtocolSnmptcpGetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSnmptcpGetTraceRequest struct {
    PathParams ProtocolSnmptcpGetTracePathParams 
    
}

type ProtocolSnmptcpGetTraceResponse struct {
    ConfigSnmptcp *shared.ConfigSnmptcp 
    ContentType string 
    StatusCode int64 
    
}

