package operations

type GetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type GetStatisticsRequest struct {
	PathParams GetStatisticsPathParams
}

type GetStatisticsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetStatistics200ApplicationJSONInt32Integers []int32
}
