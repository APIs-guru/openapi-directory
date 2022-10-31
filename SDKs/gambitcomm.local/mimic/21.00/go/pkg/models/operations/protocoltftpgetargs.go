package operations

type ProtocolTftpGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTftpGetArgsRequest struct {
	PathParams ProtocolTftpGetArgsPathParams
}

type ProtocolTftpGetArgsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolTftpGetArgs200ApplicationJSONObject map[string]interface{}
}
