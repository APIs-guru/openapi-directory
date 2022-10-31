package operations

type AgentStoreCopyPathParams struct {
	AgentNum   int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	OtherAgent int32 `pathParam:"style=simple,explode=false,name=otherAgent"`
}

type AgentStoreCopyRequest struct {
	PathParams AgentStoreCopyPathParams
}

type AgentStoreCopyResponse struct {
	ContentType                            string
	StatusCode                             int64
	AgentStoreCopy200ApplicationJSONString *string
}
