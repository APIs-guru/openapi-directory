package operations



type ProtocolNetflowReloadPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolNetflowReloadRequest struct {
    PathParams ProtocolNetflowReloadPathParams 
    
}

type ProtocolNetflowReloadResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowReload200ApplicationJSONString *string 
    
}

