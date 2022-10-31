package operations

type ProtocolProxySetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolProxySetConfigRequest struct {
	PathParams ProtocolProxySetConfigPathParams
}

type ProtocolProxySetConfigResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ProtocolProxySetConfig200ApplicationJSONString *string
}
