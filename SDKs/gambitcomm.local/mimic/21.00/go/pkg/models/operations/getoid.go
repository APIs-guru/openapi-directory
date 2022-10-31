package operations

type GetOidPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type GetOidRequest struct {
	PathParams GetOidPathParams
}

type GetOidResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetOid200ApplicationJSONString *string
}
