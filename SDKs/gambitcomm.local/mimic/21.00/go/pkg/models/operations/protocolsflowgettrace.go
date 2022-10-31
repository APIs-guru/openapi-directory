package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSflowGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowGetTraceRequest struct {
	PathParams ProtocolSflowGetTracePathParams
}

type ProtocolSflowGetTraceResponse struct {
	ConfigSflow *shared.ConfigSflow
	ContentType string
	StatusCode  int64
}
