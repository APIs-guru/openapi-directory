package operations

type SetDelayPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Delay    int32 `pathParam:"style=simple,explode=false,name=delay"`
}

type SetDelayRequest struct {
	PathParams SetDelayPathParams
}

type SetDelayResponse struct {
	ContentType                            string
	StatusCode                             int64
	SetDelay200ApplicationJSONInt32Integer *int32
}
