package operations

type ProtocolMqttSetTracePathParams struct {
	AgentNum    int32  `pathParam:"style=simple,explode=false,name=agentNum"`
	EnableOrNot string `pathParam:"style=simple,explode=false,name=enableOrNot"`
}

type ProtocolMqttSetTraceRequest struct {
	PathParams ProtocolMqttSetTracePathParams
}

type ProtocolMqttSetTraceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ProtocolMqttSetTrace200ApplicationJSONString *string
}
