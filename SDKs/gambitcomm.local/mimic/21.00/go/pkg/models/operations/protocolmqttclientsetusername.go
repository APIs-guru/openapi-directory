package operations

type ProtocolMqttClientSetUsernamePathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ProtocolMqttClientSetUsernameRequest struct {
	PathParams ProtocolMqttClientSetUsernamePathParams
}

type ProtocolMqttClientSetUsernameResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	ProtocolMqttClientSetUsername200ApplicationJSONInt32Integers []int32
}
