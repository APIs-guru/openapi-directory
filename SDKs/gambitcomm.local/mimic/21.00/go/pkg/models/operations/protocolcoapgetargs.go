package operations

type ProtocolCoapGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolCoapGetArgsRequest struct {
	PathParams ProtocolCoapGetArgsPathParams
}

type ProtocolCoapGetArgsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolCoapGetArgs200ApplicationJSONObject map[string]interface{}
}
