package operations



type GetTracePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetTraceRequest struct {
    PathParams GetTracePathParams 
    
}

type GetTraceResponse struct {
    ContentType string 
    StatusCode int64 
    GetTrace200ApplicationJSONInt32Integer *int32 
    
}

