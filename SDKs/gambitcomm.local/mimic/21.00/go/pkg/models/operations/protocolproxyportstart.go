package operations



type ProtocolProxyPortStartPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolProxyPortStartRequest struct {
    PathParams ProtocolProxyPortStartPathParams 
    
}

type ProtocolProxyPortStartResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyPortStart200ApplicationJSONString *string 
    
}

