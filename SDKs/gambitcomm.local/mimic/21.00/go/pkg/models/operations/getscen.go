package operations

type GetScenPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetScenRequest struct {
	PathParams GetScenPathParams
}

type GetScenResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetScen200ApplicationJSONInt32Integer *int32
}
