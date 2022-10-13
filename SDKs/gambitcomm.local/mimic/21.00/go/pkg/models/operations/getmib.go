package operations

type GetMibPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Object   string `pathParam:"style=simple,explode=false,name=object"`
}

type GetMibRequest struct {
	PathParams GetMibPathParams
}

type GetMibResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetMib200ApplicationJSONString *string
}
