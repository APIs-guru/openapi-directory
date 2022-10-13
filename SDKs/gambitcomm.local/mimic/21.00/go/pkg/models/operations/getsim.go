package operations

type GetSimPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetSimRequest struct {
	PathParams GetSimPathParams
}

type GetSimResponse struct {
	ContentType                    string
	StatusCode                     int64
	GetSim200ApplicationJSONString *string
}
