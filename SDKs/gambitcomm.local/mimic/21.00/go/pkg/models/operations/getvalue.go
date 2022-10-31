package operations

type GetValuePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
	Variable string `pathParam:"style=simple,explode=false,name=variable"`
}

type GetValueRequest struct {
	PathParams GetValuePathParams
}

type GetValueResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetValue200ApplicationJSONString *string
}
