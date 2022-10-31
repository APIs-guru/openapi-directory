package operations

type FromAddPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type FromAddRequest struct {
	PathParams FromAddPathParams
}

type FromAddResponse struct {
	ContentType                     string
	StatusCode                      int64
	FromAdd200ApplicationJSONString *string
}
