package operations

type GetNumberStartsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetNumberStartsRequest struct {
	PathParams GetNumberStartsPathParams
}

type GetNumberStartsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetNumberStarts200ApplicationJSONInt32Integer *int32
}
