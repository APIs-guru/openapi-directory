package operations

type ProtocolSnmptcpSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolSnmptcpSetTraceRequest struct {
	PathParams ProtocolSnmptcpSetTracePathParams
}

type ProtocolSnmptcpSetTraceResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSnmptcpSetTrace200ApplicationJSONString *string
}
