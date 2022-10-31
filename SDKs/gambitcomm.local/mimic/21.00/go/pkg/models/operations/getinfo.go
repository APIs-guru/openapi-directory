package operations

type GetInfoPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type GetInfoRequest struct {
	PathParams GetInfoPathParams
}

type GetInfoResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetInfo200ApplicationJSONString *string
}
