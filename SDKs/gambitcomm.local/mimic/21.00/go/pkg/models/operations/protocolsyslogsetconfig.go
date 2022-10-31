package operations

type ProtocolSyslogSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolSyslogSetConfigRequest struct {
	PathParams ProtocolSyslogSetConfigPathParams
}

type ProtocolSyslogSetConfigResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolSyslogSetConfig200ApplicationJSONString *string
}
