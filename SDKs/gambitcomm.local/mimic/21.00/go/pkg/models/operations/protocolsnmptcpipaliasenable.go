package operations



type ProtocolSnmptcpIpaliasEnablePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolSnmptcpIpaliasEnableRequest struct {
    PathParams ProtocolSnmptcpIpaliasEnablePathParams 
    
}

type ProtocolSnmptcpIpaliasEnableResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmptcpIpaliasEnable200ApplicationJSONString *string 
    
}

