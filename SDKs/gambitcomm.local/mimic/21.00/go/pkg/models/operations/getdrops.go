package operations

type GetDropsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetDropsRequest struct {
	PathParams GetDropsPathParams
}

type GetDropsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetDrops200ApplicationJSONInt32Integer *int32
}
