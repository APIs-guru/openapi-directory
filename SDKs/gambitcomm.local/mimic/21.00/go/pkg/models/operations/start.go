package operations

type StartPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type StartRequest struct {
	PathParams StartPathParams
}

type StartResponse struct {
	ContentType                   string
	StatusCode                    int64
	Start200ApplicationJSONString *string
}
