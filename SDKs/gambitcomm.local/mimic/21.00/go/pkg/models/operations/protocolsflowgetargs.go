package operations

type ProtocolSflowGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowGetArgsRequest struct {
	PathParams ProtocolSflowGetArgsPathParams
}

type ProtocolSflowGetArgsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolSflowGetArgs200ApplicationJSONObject map[string]interface{}
}
