package operations

type ProtocolMqttClientUnsubscribePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
	SubNum   int32 `pathParam:"style=simple,explode=false,name=subNum"`
}

type ProtocolMqttClientUnsubscribeRequest struct {
	PathParams ProtocolMqttClientUnsubscribePathParams
}

type ProtocolMqttClientUnsubscribeResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ProtocolMqttClientUnsubscribe200ApplicationJSONString *string
}
