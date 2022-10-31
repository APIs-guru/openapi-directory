package operations

type ProtocolTelnetServerGetStatePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetServerGetStateRequest struct {
	PathParams ProtocolTelnetServerGetStatePathParams
}

type ProtocolTelnetServerGetStateResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	ProtocolTelnetServerGetState200ApplicationJSONInt32Integers []int32
}
