package operations



type GetStateChangedPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetStateChangedRequest struct {
    PathParams GetStateChangedPathParams 
    
}

type GetStateChangedResponse struct {
    ContentType string 
    StatusCode int64 
    GetStateChanged200ApplicationJSONInt32Integer *int32 
    
}

