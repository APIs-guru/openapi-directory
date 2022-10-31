package operations

type ProtocolTftpSessionReadPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Srcfile  string `pathParam:"style=simple,explode=false,name=srcfile"`
}

type ProtocolTftpSessionReadRequest struct {
	PathParams ProtocolTftpSessionReadPathParams
}

type ProtocolTftpSessionReadResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ProtocolTftpSessionRead200ApplicationJSONInt32Integers []int32
}
