package operations

type DelIpaliasPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type DelIpaliasRequest struct {
	PathParams DelIpaliasPathParams
}

type DelIpaliasResponse struct {
	ContentType                        string
	StatusCode                         int64
	DelIpalias200ApplicationJSONString *string
}
