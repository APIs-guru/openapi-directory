package operations

type ProtocolMqttClientMessageSetPathParams struct {
	AgentNum int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	Attr     string `pathParam:"style=simple,explode=false,name=attr"`
	MsgNum   int32  `pathParam:"style=simple,explode=false,name=msgNum"`
	Value    string `pathParam:"style=simple,explode=false,name=value"`
}

type ProtocolMqttClientMessageSetRequest struct {
	PathParams ProtocolMqttClientMessageSetPathParams
}

type ProtocolMqttClientMessageSetResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	ProtocolMqttClientMessageSet200ApplicationJSONStrings []string
}
