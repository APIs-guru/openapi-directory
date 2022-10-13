package operations

type ProtocolNetflowSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolNetflowSetConfigRequest struct {
	PathParams ProtocolNetflowSetConfigPathParams
}

type ProtocolNetflowSetConfigResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ProtocolNetflowSetConfig200ApplicationJSONString *string
}
