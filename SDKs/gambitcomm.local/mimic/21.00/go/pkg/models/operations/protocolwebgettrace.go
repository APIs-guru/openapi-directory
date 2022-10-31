package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolWebGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolWebGetTraceRequest struct {
	PathParams ProtocolWebGetTracePathParams
}

type ProtocolWebGetTraceResponse struct {
	ConfigWeb   *shared.ConfigWeb
	ContentType string
	StatusCode  int64
}
