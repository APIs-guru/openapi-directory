package operations

type FromDelPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type FromDelRequest struct {
	PathParams FromDelPathParams
}

type FromDelResponse struct {
	ContentType                     string
	StatusCode                      int64
	FromDel200ApplicationJSONString *string
}
