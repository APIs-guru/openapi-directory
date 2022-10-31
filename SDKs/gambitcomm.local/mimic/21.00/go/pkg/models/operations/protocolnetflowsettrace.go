package operations



type ProtocolNetflowSetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
    
}

type ProtocolNetflowSetTraceRequest struct {
    PathParams ProtocolNetflowSetTracePathParams 
    
}

type ProtocolNetflowSetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowSetTrace200ApplicationJSONString *string 
    
}

