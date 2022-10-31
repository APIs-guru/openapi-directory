package operations

type ProtocolTftpSessionStatusPathParams struct {
	AgentNum  int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	SessionID string `pathParam:"style=simple,explode=false,name=sessionID"`
}

type ProtocolTftpSessionStatusRequest struct {
	PathParams ProtocolTftpSessionStatusPathParams
}

type ProtocolTftpSessionStatusResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ProtocolTftpSessionStatus200ApplicationJSONString *string
}
