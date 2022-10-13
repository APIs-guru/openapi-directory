package operations

type ProtocolTodGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTodGetArgsRequest struct {
	PathParams ProtocolTodGetArgsPathParams
}

type ProtocolTodGetArgsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ProtocolTodGetArgs200ApplicationJSONObject map[string]interface{}
}
