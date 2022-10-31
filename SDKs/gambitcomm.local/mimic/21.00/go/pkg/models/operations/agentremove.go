package operations

type AgentRemovePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type AgentRemoveRequest struct {
	PathParams AgentRemovePathParams
}

type AgentRemoveResponse struct {
	ContentType                         string
	StatusCode                          int64
	AgentRemove200ApplicationJSONString *string
}
