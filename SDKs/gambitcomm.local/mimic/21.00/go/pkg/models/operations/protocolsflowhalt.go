package operations

type ProtocolSflowHaltPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowHaltRequest struct {
	PathParams ProtocolSflowHaltPathParams
}

type ProtocolSflowHaltResponse struct {
	ContentType                               string
	StatusCode                                int64
	ProtocolSflowHalt200ApplicationJSONString *string
}
