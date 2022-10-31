package operations



type GetConfigChangedPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetConfigChangedRequest struct {
    PathParams GetConfigChangedPathParams 
    
}

type GetConfigChangedResponse struct {
    ContentType string 
    StatusCode int64 
    GetConfigChanged200ApplicationJSONInt32Integer *int32 
    
}

