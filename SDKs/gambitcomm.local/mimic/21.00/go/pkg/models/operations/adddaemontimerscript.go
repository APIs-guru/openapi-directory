package operations



type AddDaemonTimerScriptPathParams struct {
    Arg string `pathParam:"style=simple,explode=false,name=arg"`
    Interval int32 `pathParam:"style=simple,explode=false,name=interval"`
    Script string `pathParam:"style=simple,explode=false,name=script"`
    
}

type AddDaemonTimerScriptRequest struct {
    PathParams AddDaemonTimerScriptPathParams 
    
}

type AddDaemonTimerScriptResponse struct {
    ContentType string 
    StatusCode int64 
    AddDaemonTimerScript200ApplicationJSONString *string 
    
}

