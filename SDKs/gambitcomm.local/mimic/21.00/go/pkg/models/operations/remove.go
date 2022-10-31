package operations

type RemovePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Instance string `pathParam:"style=simple,explode=false,name=instance"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type RemoveRequest struct {
	PathParams RemovePathParams
}

type RemoveResponse struct {
	ContentType                    string
	StatusCode                     int64
	Remove200ApplicationJSONString *string
}
