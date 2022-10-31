package operations

type UnsetValuePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
	Variable string `pathParam:"style=simple,explode=false,name=variable"`
}

type UnsetValueRequest struct {
	PathParams UnsetValuePathParams
}

type UnsetValueResponse struct {
	ContentType                        string
	StatusCode                         int64
	UnsetValue200ApplicationJSONString *string
}
