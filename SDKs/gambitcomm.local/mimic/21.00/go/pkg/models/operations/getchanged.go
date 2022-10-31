package operations



type GetChangedPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetChangedRequest struct {
    PathParams GetChangedPathParams 
    
}

type GetChangedResponse struct {
    ContentType string 
    StatusCode int64 
    GetChanged200ApplicationJSONInt32Integer *int32 
    
}

