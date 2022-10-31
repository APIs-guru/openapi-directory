package operations

type GetMaskPathParams struct {
	AgentNum int64 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetMaskRequest struct {
	PathParams GetMaskPathParams
}

type GetMaskResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetMask200ApplicationJSONString *string
}
