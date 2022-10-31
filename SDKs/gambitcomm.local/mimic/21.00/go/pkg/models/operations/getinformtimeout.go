package operations



type GetInformTimeoutPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetInformTimeoutRequest struct {
    PathParams GetInformTimeoutPathParams 
    
}

type GetInformTimeoutResponse struct {
    ContentType string 
    StatusCode int64 
    GetInformTimeout200ApplicationJSONInt32Integer *int32 
    
}

