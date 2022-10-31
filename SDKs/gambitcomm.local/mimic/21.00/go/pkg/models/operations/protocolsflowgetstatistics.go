package operations

type ProtocolSflowGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowGetStatisticsRequest struct {
	PathParams ProtocolSflowGetStatisticsPathParams
}

type ProtocolSflowGetStatisticsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	ProtocolSflowGetStatistics200ApplicationJSONInt32Integers []int32
}
