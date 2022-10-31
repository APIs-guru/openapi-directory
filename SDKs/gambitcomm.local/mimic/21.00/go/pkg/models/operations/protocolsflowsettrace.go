package operations



type ProtocolSflowSetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
    
}

type ProtocolSflowSetTraceRequest struct {
    PathParams ProtocolSflowSetTracePathParams 
    
}

type ProtocolSflowSetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolSflowSetTrace200ApplicationJSONString *string 
    
}

