package operations

type ProtocolMqttClientSetClientidPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	ClientID string `pathParam:"style=simple,explode=false,name=clientID"`
}

type ProtocolMqttClientSetClientidRequest struct {
	PathParams ProtocolMqttClientSetClientidPathParams
}

type ProtocolMqttClientSetClientidResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	ProtocolMqttClientSetClientid200ApplicationJSONInt32Integers []int32
}
