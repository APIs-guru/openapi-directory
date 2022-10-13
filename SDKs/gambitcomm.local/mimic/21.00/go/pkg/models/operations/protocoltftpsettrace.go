package operations

type ProtocolTftpSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolTftpSetTraceRequest struct {
	PathParams ProtocolTftpSetTracePathParams
}

type ProtocolTftpSetTraceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolTftpSetTrace200ApplicationJSONString *string
}
