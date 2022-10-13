package operations

type GetWriteCommunityPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetWriteCommunityRequest struct {
	PathParams GetWriteCommunityPathParams
}

type GetWriteCommunityResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetWriteCommunity200ApplicationJSONString *string
}
