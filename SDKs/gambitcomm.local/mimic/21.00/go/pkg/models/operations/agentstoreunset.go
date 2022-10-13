package operations

type AgentStoreUnsetPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Var      string `pathParam:"style=simple,explode=false,name=var"`
}

type AgentStoreUnsetRequest struct {
	PathParams AgentStoreUnsetPathParams
}

type AgentStoreUnsetResponse struct {
	ContentType                             string
	StatusCode                              int64
	AgentStoreUnset200ApplicationJSONString *string
}
