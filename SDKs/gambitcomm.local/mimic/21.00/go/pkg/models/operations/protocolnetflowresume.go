package operations



type ProtocolNetflowResumePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ProtocolNetflowResumeRequest struct {
    PathParams ProtocolNetflowResumePathParams 
    
}

type ProtocolNetflowResumeResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowResume200ApplicationJSONString *string 
    
}

