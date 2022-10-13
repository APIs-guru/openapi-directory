package operations

type ProtocolCoapSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolCoapSetTraceRequest struct {
	PathParams ProtocolCoapSetTracePathParams
}

type ProtocolCoapSetTraceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolCoapSetTrace200ApplicationJSONString *string
}
