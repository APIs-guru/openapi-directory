package operations

type GetStatePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type GetStateRequest struct {
	PathParams GetStatePathParams
}

type GetStateResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetState200ApplicationJSONString *string
}
