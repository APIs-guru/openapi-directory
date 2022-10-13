package operations

type ProtocolDhcpSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolDhcpSetConfigRequest struct {
	PathParams ProtocolDhcpSetConfigPathParams
}

type ProtocolDhcpSetConfigResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolDhcpSetConfig200ApplicationJSONString *string
}
