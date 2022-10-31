package operations

type ProtocolTftpSetConfigPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Argument string `pathParam:"style=simple,explode=false,name=argument"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolTftpSetConfigRequest struct {
	PathParams ProtocolTftpSetConfigPathParams
}

type ProtocolTftpSetConfigResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ProtocolTftpSetConfig200ApplicationJSONString *string
}
