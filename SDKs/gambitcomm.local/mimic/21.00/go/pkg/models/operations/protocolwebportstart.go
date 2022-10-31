package operations

type ProtocolWebPortStartPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32 `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolWebPortStartRequest struct {
	PathParams ProtocolWebPortStartPathParams
}

type ProtocolWebPortStartResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolWebPortStart200ApplicationJSONString *string
}
