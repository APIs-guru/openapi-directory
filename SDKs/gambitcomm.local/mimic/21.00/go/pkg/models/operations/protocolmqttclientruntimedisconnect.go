package operations

type ProtocolMqttClientRuntimeDisconnectPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttClientRuntimeDisconnectRequest struct {
	PathParams ProtocolMqttClientRuntimeDisconnectPathParams
}

type ProtocolMqttClientRuntimeDisconnectResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	ProtocolMqttClientRuntimeDisconnect200ApplicationJSONStrings []string
}
