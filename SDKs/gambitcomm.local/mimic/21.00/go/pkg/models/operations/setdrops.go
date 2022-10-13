package operations

type SetDropsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	Drops    int32 `pathParam:"style=simple,explode=false,name=drops"`
}

type SetDropsRequest struct {
	PathParams SetDropsPathParams
}

type SetDropsResponse struct {
	ContentType                            string
	StatusCode                             int64
	SetDrops200ApplicationJSONInt32Integer *int32
}
