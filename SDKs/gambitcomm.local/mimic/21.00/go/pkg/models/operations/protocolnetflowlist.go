package operations

type ProtocolNetflowListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolNetflowListRequest struct {
	PathParams ProtocolNetflowListPathParams
}

type ProtocolNetflowListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolNetflowList200ApplicationJSONObjects []map[string]interface{}
}
