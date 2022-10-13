package operations

type ProtocolMqttClientSetPortPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Port     string `pathParam:"style=simple,explode=false,name=port"`
}

type ProtocolMqttClientSetPortRequest struct {
	PathParams ProtocolMqttClientSetPortPathParams
}

type ProtocolMqttClientSetPortResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	ProtocolMqttClientSetPort200ApplicationJSONInt32Integers []int32
}
