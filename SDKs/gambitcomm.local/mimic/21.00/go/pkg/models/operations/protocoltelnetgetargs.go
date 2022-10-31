package operations

type ProtocolTelnetGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetGetArgsRequest struct {
	PathParams ProtocolTelnetGetArgsPathParams
}

type ProtocolTelnetGetArgsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolTelnetGetArgs200ApplicationJSONObject map[string]interface{}
}
