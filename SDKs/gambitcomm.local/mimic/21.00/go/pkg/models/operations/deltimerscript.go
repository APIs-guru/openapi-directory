package operations

type DelTimerScriptPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Arg      string `pathParam:"style=simple,explode=false,name=arg"`
	Interval int32  `pathParam:"style=simple,explode=false,name=interval"`
	Script   string `pathParam:"style=simple,explode=false,name=script"`
}

type DelTimerScriptRequest struct {
	PathParams DelTimerScriptPathParams
}

type DelTimerScriptResponse struct {
	ContentType                            string
	StatusCode                             int64
	DelTimerScript200ApplicationJSONString *string
}
