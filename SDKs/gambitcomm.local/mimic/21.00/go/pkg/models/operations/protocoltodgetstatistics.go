package operations

type ProtocolTodGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTodGetStatisticsRequest struct {
	PathParams ProtocolTodGetStatisticsPathParams
}

type ProtocolTodGetStatisticsResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	ProtocolTodGetStatistics200ApplicationJSONInt32Integers []int32
}
