package operations

type GetHostPathParams struct {
	AgentNum int64 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetHostRequest struct {
	PathParams GetHostPathParams
}

type GetHostResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetHost200ApplicationJSONString *string
}
