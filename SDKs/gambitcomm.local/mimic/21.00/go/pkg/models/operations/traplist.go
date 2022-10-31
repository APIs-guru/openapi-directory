package operations

type TrapListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type TrapListRequest struct {
	PathParams TrapListPathParams
}

type TrapListResponse struct {
	ContentType                       string
	StatusCode                        int64
	TrapList200ApplicationJSONStrings []string
}
