package operations

type ProtocolSflowResumePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowResumeRequest struct {
	PathParams ProtocolSflowResumePathParams
}

type ProtocolSflowResumeResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolSflowResume200ApplicationJSONString *string
}
