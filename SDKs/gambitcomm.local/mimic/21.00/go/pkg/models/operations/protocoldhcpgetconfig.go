package operations

import (
"openapi/pkg/models/shared")

type ProtocolDhcpGetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolDhcpGetConfigRequest struct {
    PathParams ProtocolDhcpGetConfigPathParams 
    
}

type ProtocolDhcpGetConfigResponse struct {
    ConfigDhcp *shared.ConfigDhcp 
    ContentType string 
    StatusCode int64 
    
}

