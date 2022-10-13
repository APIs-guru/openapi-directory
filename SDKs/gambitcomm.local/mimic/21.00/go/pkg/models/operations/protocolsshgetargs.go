package operations

type ProtocolSSHGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSSHGetArgsRequest struct {
	PathParams ProtocolSSHGetArgsPathParams
}

type ProtocolSSHGetArgsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	ProtocolSSHGetArgs200ApplicationJSONObject map[string]interface{}
}
