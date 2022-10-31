package operations



type ProtocolProxyPortListPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolProxyPortListRequest struct {
    PathParams ProtocolProxyPortListPathParams 
    
}

type ProtocolProxyPortListResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyPortList200ApplicationJSONInt32Integers []int32 
    
}

