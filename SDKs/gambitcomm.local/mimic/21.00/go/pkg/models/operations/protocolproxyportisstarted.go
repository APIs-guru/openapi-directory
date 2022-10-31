package operations



type ProtocolProxyPortIsstartedPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolProxyPortIsstartedRequest struct {
    PathParams ProtocolProxyPortIsstartedPathParams 
    
}

type ProtocolProxyPortIsstartedResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyPortIsstarted200ApplicationJSONString *string 
    
}

