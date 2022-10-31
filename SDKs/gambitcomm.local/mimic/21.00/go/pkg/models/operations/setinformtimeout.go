package operations

type SetInformTimeoutPathParams struct {
	AgentNum      int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	InformTimeout int32 `pathParam:"style=simple,explode=false,name=inform_timeout"`
}

type SetInformTimeoutRequest struct {
	PathParams SetInformTimeoutPathParams
}

type SetInformTimeoutResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SetInformTimeout200ApplicationJSONInt32Integer *int32
}
