package operations

type ProtocolTodSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolTodSetConfigRequest struct {
	PathParams ProtocolTodSetConfigPathParams
}

type ProtocolTodSetConfigResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolTodSetConfig200ApplicationJSONString *string
}
