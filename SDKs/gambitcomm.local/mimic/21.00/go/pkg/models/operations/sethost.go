package operations

type SetHostPathParams struct {
	AgentNum int64  `pathParam:"style=simple,explode=false,name=agentNum"`
	Host     string `pathParam:"style=simple,explode=false,name=host"`
}

type SetHostRequest struct {
	PathParams SetHostPathParams
}

type SetHostResponse struct {
	ContentType                     string
	StatusCode                      int64
	SetHost200ApplicationJSONString *string
}
