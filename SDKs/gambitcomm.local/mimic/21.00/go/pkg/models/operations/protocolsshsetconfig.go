package operations

type ProtocolSSHSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolSSHSetConfigRequest struct {
	PathParams ProtocolSSHSetConfigPathParams
}

type ProtocolSSHSetConfigResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolSSHSetConfig200ApplicationJSONString *string
}
