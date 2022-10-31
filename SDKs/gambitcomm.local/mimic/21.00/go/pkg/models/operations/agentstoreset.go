package operations

type AgentStoreSetPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Persist  int32  `pathParam:"style=simple,explode=false,name=persist"`
	Var      string `pathParam:"style=simple,explode=false,name=var"`
}

type AgentStoreSetRequest struct {
	PathParams AgentStoreSetPathParams
	Request    *string `request:"mediaType=application/json"`
}

type AgentStoreSetResponse struct {
	ContentType                           string
	StatusCode                            int64
	AgentStoreSet200ApplicationJSONString *string
}
