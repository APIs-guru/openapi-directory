package operations

type GetAgentStatePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetAgentStateRequest struct {
	PathParams GetAgentStatePathParams
}

type GetAgentStateResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetAgentState200ApplicationJSONInt32Integer *int32
}
