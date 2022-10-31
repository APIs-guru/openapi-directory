package operations



type DelDaemonTimerScriptPathParams struct {
    Arg string `pathParam:"style=simple,explode=false,name=arg"`
    Interval int32 `pathParam:"style=simple,explode=false,name=interval"`
    Script string `pathParam:"style=simple,explode=false,name=script"`
    
}

type DelDaemonTimerScriptRequest struct {
    PathParams DelDaemonTimerScriptPathParams 
    
}

type DelDaemonTimerScriptResponse struct {
    ContentType string 
    StatusCode int64 
    DelDaemonTimerScript200ApplicationJSONString *string 
    
}

