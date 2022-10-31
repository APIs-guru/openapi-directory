package operations

type ProtocolSyslogSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolSyslogSetTraceRequest struct {
	PathParams ProtocolSyslogSetTracePathParams
}

type ProtocolSyslogSetTraceResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolSyslogSetTrace200ApplicationJSONString *string
}
