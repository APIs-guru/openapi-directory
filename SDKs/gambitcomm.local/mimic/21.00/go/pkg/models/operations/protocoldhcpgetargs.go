package operations

type ProtocolDhcpGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolDhcpGetArgsRequest struct {
	PathParams ProtocolDhcpGetArgsPathParams
}

type ProtocolDhcpGetArgsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolDhcpGetArgs200ApplicationJSONObject map[string]interface{}
}
