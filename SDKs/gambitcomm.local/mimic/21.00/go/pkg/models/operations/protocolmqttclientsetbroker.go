package operations

type ProtocolMqttClientSetBrokerPathParams struct {
	AgentNum   int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	BrokerAddr string `pathParam:"style=simple,explode=false,name=brokerAddr"`
}

type ProtocolMqttClientSetBrokerRequest struct {
	PathParams ProtocolMqttClientSetBrokerPathParams
}

type ProtocolMqttClientSetBrokerResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	ProtocolMqttClientSetBroker200ApplicationJSONInt32Integers []int32
}
