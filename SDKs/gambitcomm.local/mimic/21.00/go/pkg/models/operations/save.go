package operations

type SavePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type SaveRequest struct {
	PathParams SavePathParams
}

type SaveResponse struct {
	ContentType                  string
	StatusCode                   int64
	Save200ApplicationJSONString *string
}
