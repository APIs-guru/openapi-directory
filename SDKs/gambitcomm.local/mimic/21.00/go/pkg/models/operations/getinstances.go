package operations

type GetInstancesPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type GetInstancesRequest struct {
	PathParams GetInstancesPathParams
}

type GetInstancesResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetInstances200ApplicationJSONStrings []string
}
