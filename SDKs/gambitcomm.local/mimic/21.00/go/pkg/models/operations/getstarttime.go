package operations



type GetStarttimePathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    
}

type GetStarttimeRequest struct {
    PathParams GetStarttimePathParams 
    
}

type GetStarttimeResponse struct {
    ContentType string 
    StatusCode int64 
    GetStarttime200ApplicationJSONString *string 
    
}

