package operations

type ProtocolDhcpSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolDhcpSetTraceRequest struct {
	PathParams ProtocolDhcpSetTracePathParams
}

type ProtocolDhcpSetTraceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolDhcpSetTrace200ApplicationJSONString *string
}
