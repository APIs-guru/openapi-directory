package operations

type ProtocolWebSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolWebSetTraceRequest struct {
	PathParams ProtocolWebSetTracePathParams
}

type ProtocolWebSetTraceResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolWebSetTrace200ApplicationJSONString *string
}
