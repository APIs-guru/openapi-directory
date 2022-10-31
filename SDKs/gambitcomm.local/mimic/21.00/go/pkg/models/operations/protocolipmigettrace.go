package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolIpmiGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolIpmiGetTraceRequest struct {
	PathParams ProtocolIpmiGetTracePathParams
}

type ProtocolIpmiGetTraceResponse struct {
	ConfigIpmi  *shared.ConfigIpmi
	ContentType string
	StatusCode  int64
}
