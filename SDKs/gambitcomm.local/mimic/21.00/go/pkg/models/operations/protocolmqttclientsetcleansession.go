package operations

type ProtocolMqttClientSetCleansessionPathParams struct {
	AgentNum   int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	CleanOrNot int32 `pathParam:"style=simple,explode=false,name=cleanOrNot"`
}

type ProtocolMqttClientSetCleansessionRequest struct {
	PathParams ProtocolMqttClientSetCleansessionPathParams
}

type ProtocolMqttClientSetCleansessionResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	ProtocolMqttClientSetCleansession200ApplicationJSONInt32Integers []int32
}
