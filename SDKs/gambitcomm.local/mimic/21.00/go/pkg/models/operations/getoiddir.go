package operations

type GetOiddirPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetOiddirRequest struct {
	PathParams GetOiddirPathParams
}

type GetOiddirResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetOiddir200ApplicationJSONString *string
}
