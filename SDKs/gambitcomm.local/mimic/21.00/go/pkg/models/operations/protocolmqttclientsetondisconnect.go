package operations

type ProtocolMqttClientSetOnDisconnectPathParams struct {
	Action   string `pathParam:"style=simple,explode=false,name=action"`
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttClientSetOnDisconnectRequest struct {
	PathParams ProtocolMqttClientSetOnDisconnectPathParams
}

type ProtocolMqttClientSetOnDisconnectResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	ProtocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers []int32
}
