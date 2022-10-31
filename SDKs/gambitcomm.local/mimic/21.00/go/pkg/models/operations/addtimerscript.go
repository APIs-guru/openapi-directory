package operations



type AddTimerScriptPathParams struct {
    AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
    Arg string `pathParam:"style=simple,explode=false,name=arg"`
    Interval int32 `pathParam:"style=simple,explode=false,name=interval"`
    Script string `pathParam:"style=simple,explode=false,name=script"`
    
}

type AddTimerScriptRequest struct {
    PathParams AddTimerScriptPathParams 
    
}

type AddTimerScriptResponse struct {
    ContentType string 
    StatusCode int64 
    AddTimerScript200ApplicationJSONString *string 
    
}

