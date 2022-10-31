package operations



type ProtocolNetflowSetFileNamePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    
}

type ProtocolNetflowSetFileNameRequest struct {
    PathParams ProtocolNetflowSetFileNamePathParams 
    
}

type ProtocolNetflowSetFileNameResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowSetFileName200ApplicationJSONString *string 
    
}

