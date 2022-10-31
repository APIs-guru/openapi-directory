package operations



type ProtocolProxyPortRemovePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    
}

type ProtocolProxyPortRemoveRequest struct {
    PathParams ProtocolProxyPortRemovePathParams 
    
}

type ProtocolProxyPortRemoveResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyPortRemove200ApplicationJSONString *string 
    
}

