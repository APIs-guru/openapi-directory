package operations

type ProtocolTelnetGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetGetStatisticsRequest struct {
	PathParams ProtocolTelnetGetStatisticsPathParams
}

type ProtocolTelnetGetStatisticsResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	ProtocolTelnetGetStatistics200ApplicationJSONInt32Integers []int32
}
