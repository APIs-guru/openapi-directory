package operations

type ProtocolProxyPortStopPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32 `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolProxyPortStopRequest struct {
	PathParams ProtocolProxyPortStopPathParams
}

type ProtocolProxyPortStopResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolProxyPortStop200ApplicationJSONString *string
}
