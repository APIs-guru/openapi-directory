package operations

import (
"openapi/pkg/models/shared")

type ProtocolSSHIpaliasListPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSSHIpaliasListRequest struct {
    PathParams ProtocolSSHIpaliasListPathParams 
    
}

type ProtocolSSHIpaliasListResponse struct {
    ContentType string 
    IPAliases []shared.IPAlias 
    StatusCode int64 
    
}

