package operations

type ProtocolDhcpParamsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolDhcpParamsRequest struct {
	PathParams ProtocolDhcpParamsPathParams
}

type ProtocolDhcpParamsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolDhcpParams200ApplicationJSONObjects []map[string]interface{}
}
