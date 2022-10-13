package operations

type GetPortPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetPortRequest struct {
	PathParams GetPortPathParams
}

type GetPortResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetPort200ApplicationJSONString *string
}
