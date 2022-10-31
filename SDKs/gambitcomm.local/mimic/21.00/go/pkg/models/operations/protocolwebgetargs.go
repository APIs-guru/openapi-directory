package operations

type ProtocolWebGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolWebGetArgsRequest struct {
	PathParams ProtocolWebGetArgsPathParams
}

type ProtocolWebGetArgsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ProtocolWebGetArgs200ApplicationJSONObject map[string]interface{}
}
