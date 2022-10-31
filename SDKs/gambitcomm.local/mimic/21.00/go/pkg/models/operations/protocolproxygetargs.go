package operations

type ProtocolProxyGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolProxyGetArgsRequest struct {
	PathParams ProtocolProxyGetArgsPathParams
}

type ProtocolProxyGetArgsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolProxyGetArgs200ApplicationJSONObject map[string]interface{}
}
