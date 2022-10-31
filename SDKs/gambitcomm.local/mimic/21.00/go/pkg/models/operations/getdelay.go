package operations



type GetDelayPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetDelayRequest struct {
    PathParams GetDelayPathParams 
    
}

type GetDelayResponse struct {
    ContentType string 
    StatusCode int64 
    GetDelay200ApplicationJSONInt32Integer *int32 
    
}

