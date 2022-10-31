package operations



type SetStarttimePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Start int32 `pathParam:"style=simple,explode=false,name=start"`
    
}

type SetStarttimeRequest struct {
    PathParams SetStarttimePathParams 
    
}

type SetStarttimeResponse struct {
    ContentType string 
    StatusCode int64 
    SetStarttime200ApplicationJSONString *string 
    
}

