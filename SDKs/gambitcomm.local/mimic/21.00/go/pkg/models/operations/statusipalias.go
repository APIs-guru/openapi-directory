package operations

type StatusIpaliasPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type StatusIpaliasRequest struct {
	PathParams StatusIpaliasPathParams
}

type StatusIpaliasResponse struct {
	ContentType                           string
	StatusCode                            int64
	StatusIpalias200ApplicationJSONString *string
}
