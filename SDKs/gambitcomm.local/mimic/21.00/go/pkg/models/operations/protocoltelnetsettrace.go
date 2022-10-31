package operations

type ProtocolTelnetSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolTelnetSetTraceRequest struct {
	PathParams ProtocolTelnetSetTracePathParams
}

type ProtocolTelnetSetTraceResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolTelnetSetTrace200ApplicationJSONString *string
}
