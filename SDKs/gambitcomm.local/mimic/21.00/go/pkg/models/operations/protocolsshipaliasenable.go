package operations



type ProtocolSSHIpaliasEnablePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolSSHIpaliasEnableRequest struct {
    PathParams ProtocolSSHIpaliasEnablePathParams 
    
}

type ProtocolSSHIpaliasEnableResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSSHIpaliasEnable200ApplicationJSONString *string 
    
}

