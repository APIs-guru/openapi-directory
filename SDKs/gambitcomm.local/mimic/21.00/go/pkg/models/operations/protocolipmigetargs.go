package operations

type ProtocolIpmiGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolIpmiGetArgsRequest struct {
	PathParams ProtocolIpmiGetArgsPathParams
}

type ProtocolIpmiGetArgsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolIpmiGetArgs200ApplicationJSONObject map[string]interface{}
}
