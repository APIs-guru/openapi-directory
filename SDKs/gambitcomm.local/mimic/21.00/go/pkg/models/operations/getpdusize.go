package operations

type GetPdusizePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetPdusizeRequest struct {
	PathParams GetPdusizePathParams
}

type GetPdusizeResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetPdusize200ApplicationJSONInt32Integer *int32
}
