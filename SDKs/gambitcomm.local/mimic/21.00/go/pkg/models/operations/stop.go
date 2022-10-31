package operations

type StopPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type StopRequest struct {
	PathParams StopPathParams
}

type StopResponse struct {
	ContentType                  string
	StatusCode                   int64
	Stop200ApplicationJSONString *string
}
