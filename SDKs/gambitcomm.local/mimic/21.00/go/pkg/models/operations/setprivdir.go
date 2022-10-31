package operations



type SetPrivdirPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Privdir string `pathParam:"style=simple,explode=false,name=privdir"`
    
}

type SetPrivdirRequest struct {
    PathParams SetPrivdirPathParams 
    
}

type SetPrivdirResponse struct {
    ContentType string 
    StatusCode int64 
    SetPrivdir200ApplicationJSONString *string 
    
}

