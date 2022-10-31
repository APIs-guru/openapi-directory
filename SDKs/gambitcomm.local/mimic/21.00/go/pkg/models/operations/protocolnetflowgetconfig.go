package operations

import (
"openapi/pkg/models/shared")

type ProtocolNetflowGetConfigPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolNetflowGetConfigRequest struct {
    PathParams ProtocolNetflowGetConfigPathParams 
    
}

type ProtocolNetflowGetConfigResponse struct {
    ConfigNetflow *shared.ConfigNetflow 
    ContentType string 
    StatusCode int64 
    
}

