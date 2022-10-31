package operations

type TrapConfigAddPathParams struct {
	IP       string `pathParam:"style=simple,explode=false,name=IP"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     int32  `pathParam:"style=simple,explode=false,name=port"`
}

type TrapConfigAddRequest struct {
	PathParams TrapConfigAddPathParams
}

type TrapConfigAddResponse struct {
	ContentType                           string
	StatusCode                            int64
	TrapConfigAdd200ApplicationJSONString *string
}
