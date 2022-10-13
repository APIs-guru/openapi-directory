package operations

type ProtocolCoapGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolCoapGetStatisticsRequest struct {
	PathParams ProtocolCoapGetStatisticsPathParams
}

type ProtocolCoapGetStatisticsResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ProtocolCoapGetStatistics200ApplicationJSONInt32Integers []int32
}
