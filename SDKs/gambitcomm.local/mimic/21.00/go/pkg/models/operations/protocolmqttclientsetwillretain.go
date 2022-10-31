package operations

type ProtocolMqttClientSetWillretainPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Retain   string `pathParam:"style=simple,explode=false,name=retain"`
}

type ProtocolMqttClientSetWillretainRequest struct {
	PathParams ProtocolMqttClientSetWillretainPathParams
}

type ProtocolMqttClientSetWillretainResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	ProtocolMqttClientSetWillretain200ApplicationJSONInt32Integers []int32
}
