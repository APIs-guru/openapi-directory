package operations



type ProtocolSflowReloadPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolSflowReloadRequest struct {
    PathParams ProtocolSflowReloadPathParams 
    
}

type ProtocolSflowReloadResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSflowReload200ApplicationJSONString *string 
    
}

