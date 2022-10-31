package operations

type ProtocolProxySetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolProxySetTraceRequest struct {
	PathParams ProtocolProxySetTracePathParams
}

type ProtocolProxySetTraceResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolProxySetTrace200ApplicationJSONString *string
}
