package operations

type ProtocolMqttGetArgsPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttGetArgsRequest struct {
	PathParams ProtocolMqttGetArgsPathParams
}

type ProtocolMqttGetArgsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ProtocolMqttGetArgs200ApplicationJSONObject map[string]interface{}
}
