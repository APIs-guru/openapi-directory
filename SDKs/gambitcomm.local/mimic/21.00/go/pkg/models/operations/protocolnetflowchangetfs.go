package operations



type ProtocolNetflowChangeTfsPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Interval int32 `pathParam:"style=simple,explode=false,name=interval"`
    
}

type ProtocolNetflowChangeTfsRequest struct {
    PathParams ProtocolNetflowChangeTfsPathParams 
    
}

type ProtocolNetflowChangeTfsResponse struct {
    ContentType string 
    StatusCode int64 
    ProtocolNetflowChangeTfs200ApplicationJSONString *string 
    
}

