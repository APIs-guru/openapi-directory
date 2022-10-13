package operations

type ProtocolSnmptcpGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmptcpGetStatisticsRequest struct {
	PathParams ProtocolSnmptcpGetStatisticsPathParams
}

type ProtocolSnmptcpGetStatisticsResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	ProtocolSnmptcpGetStatistics200ApplicationJSONInt32Integers []int32
}
