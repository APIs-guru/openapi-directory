package operations

type ProtocolNetflowHaltPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolNetflowHaltRequest struct {
	PathParams ProtocolNetflowHaltPathParams
}

type ProtocolNetflowHaltResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolNetflowHalt200ApplicationJSONString *string
}
