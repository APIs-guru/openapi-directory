package operations

type ProtocolMqttClientGetStatePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttClientGetStateRequest struct {
	PathParams ProtocolMqttClientGetStatePathParams
}

type ProtocolMqttClientGetStateResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	ProtocolMqttClientGetState200ApplicationJSONInt32Integers []int32
}
