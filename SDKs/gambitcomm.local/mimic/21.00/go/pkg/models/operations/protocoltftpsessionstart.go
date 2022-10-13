package operations

type ProtocolTftpSessionStartPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionID"`
}

type ProtocolTftpSessionStartRequest struct {
	PathParams ProtocolTftpSessionStartPathParams
}

type ProtocolTftpSessionStartResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ProtocolTftpSessionStart200ApplicationJSONString *string
}
