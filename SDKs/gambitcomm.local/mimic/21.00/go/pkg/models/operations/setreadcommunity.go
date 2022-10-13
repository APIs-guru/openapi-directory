package operations

type SetReadCommunityPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Read     string `pathParam:"style=simple,explode=false,name=read"`
}

type SetReadCommunityRequest struct {
	PathParams SetReadCommunityPathParams
}

type SetReadCommunityResponse struct {
	ContentType                              string
	StatusCode                               int64
	SetReadCommunity200ApplicationJSONString *string
}
