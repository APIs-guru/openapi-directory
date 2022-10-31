package operations



type ProtocolProxyPortAddPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Port int32 `pathParam:"style=simple,explode=false,name=port"`
    Target string `pathParam:"style=simple,explode=false,name=target"`
    TargetPort int32 `pathParam:"style=simple,explode=false,name=targetPort"`
    
}

type ProtocolProxyPortAddRequest struct {
    PathParams ProtocolProxyPortAddPathParams 
    
}

type ProtocolProxyPortAddResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolProxyPortAdd200ApplicationJSONString *string 
    
}

