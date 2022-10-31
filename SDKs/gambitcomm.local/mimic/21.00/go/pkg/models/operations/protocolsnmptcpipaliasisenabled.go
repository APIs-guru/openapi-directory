package operations



type ProtocolSnmptcpIpaliasIsenabledPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Ipaddress string `pathParam:"style=simple,explode=false,name=ipaddress"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolSnmptcpIpaliasIsenabledRequest struct {
    PathParams ProtocolSnmptcpIpaliasIsenabledPathParams 
    
}

type ProtocolSnmptcpIpaliasIsenabledResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSnmptcpIpaliasIsenabled200ApplicationJSONString *string 
    
}

