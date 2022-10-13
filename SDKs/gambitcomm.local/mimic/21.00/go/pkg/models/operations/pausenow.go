package operations

type PauseNowPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type PauseNowRequest struct {
	PathParams PauseNowPathParams
}

type PauseNowResponse struct {
	ContentType                      string
	StatusCode                       int64
	PauseNow200ApplicationJSONString *string
}
