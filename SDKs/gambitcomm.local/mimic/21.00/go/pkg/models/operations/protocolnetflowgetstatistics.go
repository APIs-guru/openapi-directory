package operations

type ProtocolNetflowGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolNetflowGetStatisticsRequest struct {
	PathParams ProtocolNetflowGetStatisticsPathParams
}

type ProtocolNetflowGetStatisticsResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	ProtocolNetflowGetStatistics200ApplicationJSONInt32Integers []int32
}
