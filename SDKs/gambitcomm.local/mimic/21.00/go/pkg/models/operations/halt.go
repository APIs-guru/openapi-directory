package operations

type HaltPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type HaltRequest struct {
	PathParams HaltPathParams
}

type HaltResponse struct {
	ContentType                  string
	StatusCode                   int64
	Halt200ApplicationJSONString *string
}
