package operations

type ProtocolTelnetServerGetRulesdbPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetServerGetRulesdbRequest struct {
	PathParams ProtocolTelnetServerGetRulesdbPathParams
}

type ProtocolTelnetServerGetRulesdbResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	ProtocolTelnetServerGetRulesdb200ApplicationJSONStrings []string
}
