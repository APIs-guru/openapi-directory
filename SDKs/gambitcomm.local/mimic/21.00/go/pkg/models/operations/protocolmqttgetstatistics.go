package operations

type ProtocolMqttGetStatisticsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttGetStatisticsRequest struct {
	PathParams ProtocolMqttGetStatisticsPathParams
}

type ProtocolMqttGetStatisticsResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ProtocolMqttGetStatistics200ApplicationJSONInt32Integers []int32
}
