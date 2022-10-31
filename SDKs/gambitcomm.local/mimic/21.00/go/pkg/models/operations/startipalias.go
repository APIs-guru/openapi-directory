package operations

type StartIpaliasPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type StartIpaliasRequest struct {
	PathParams StartIpaliasPathParams
}

type StartIpaliasResponse struct {
	ContentType                          string
	StatusCode                           int64
	StartIpalias200ApplicationJSONString *string
}
