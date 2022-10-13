package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolMqttGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolMqttGetTraceRequest struct {
	PathParams ProtocolMqttGetTracePathParams
}

type ProtocolMqttGetTraceResponse struct {
	ConfigMqtt  *shared.ConfigMqtt
	ContentType string
	StatusCode  int64
}
