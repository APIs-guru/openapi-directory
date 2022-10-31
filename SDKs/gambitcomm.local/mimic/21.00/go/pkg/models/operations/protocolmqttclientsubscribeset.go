package operations

type ProtocolMqttClientSubscribeSetPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Attr     string `pathParam:"style=simple,explode=false,name=attr"`
	SubNum   int32  `pathParam:"style=simple,explode=false,name=subNum"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolMqttClientSubscribeSetRequest struct {
	PathParams ProtocolMqttClientSubscribeSetPathParams
}

type ProtocolMqttClientSubscribeSetResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	ProtocolMqttClientSubscribeSet200ApplicationJSONStrings []string
}
