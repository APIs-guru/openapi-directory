package operations

type ProtocolTftpSessionStopPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionID"`
}

type ProtocolTftpSessionStopRequest struct {
	PathParams ProtocolTftpSessionStopPathParams
}

type ProtocolTftpSessionStopResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProtocolTftpSessionStop200ApplicationJSONString *string
}
