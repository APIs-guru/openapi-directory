package operations



type ProtocolTodSetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
    
}

type ProtocolTodSetTraceRequest struct {
    PathParams ProtocolTodSetTracePathParams 
    
}

type ProtocolTodSetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolTodSetTrace200ApplicationJSONString *string 
    
}

