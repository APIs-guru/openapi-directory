package operations

type SetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Trace    int32 `pathParam:"style=simple,explode=false,name=trace"`
}

type SetTraceRequest struct {
	PathParams SetTracePathParams
}

type SetTraceResponse struct {
	ContentType                            string
	StatusCode                             int64
	SetTrace200ApplicationJSONInt32Integer *int32
}
