package operations

type ProtocolWebSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolWebSetConfigRequest struct {
	PathParams ProtocolWebSetConfigPathParams
}

type ProtocolWebSetConfigResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolWebSetConfig200ApplicationJSONString *string
}
