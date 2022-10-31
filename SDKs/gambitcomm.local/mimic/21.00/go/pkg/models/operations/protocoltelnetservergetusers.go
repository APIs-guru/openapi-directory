package operations

import (
"openapi/pkg/models/shared")

type ProtocolTelnetServerGetUsersPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolTelnetServerGetUsersRequest struct {
    PathParams ProtocolTelnetServerGetUsersPathParams 
    
}

type ProtocolTelnetServerGetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    TelnetUsers []shared.TelnetUser 
    
}

