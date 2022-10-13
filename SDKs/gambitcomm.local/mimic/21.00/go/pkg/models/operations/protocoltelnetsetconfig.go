package operations

type ProtocolTelnetSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolTelnetSetConfigRequest struct {
	PathParams ProtocolTelnetSetConfigPathParams
}

type ProtocolTelnetSetConfigResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolTelnetSetConfig200ApplicationJSONString *string
}
