package operations

type ProtocolWebPortStopPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32 `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolWebPortStopRequest struct {
	PathParams ProtocolWebPortStopPathParams
}

type ProtocolWebPortStopResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolWebPortStop200ApplicationJSONString *string
}
