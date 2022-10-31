package operations



type ReloadPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type ReloadRequest struct {
    PathParams ReloadPathParams 
    
}

type ReloadResponse struct {
    ContentType string 
    StatusCode int64 
    Reload200ApplicationJSONString *string 
    
}

