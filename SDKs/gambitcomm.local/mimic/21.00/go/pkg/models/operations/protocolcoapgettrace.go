package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolCoapGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolCoapGetTraceRequest struct {
	PathParams ProtocolCoapGetTracePathParams
}

type ProtocolCoapGetTraceResponse struct {
	ConfigCoap  *shared.ConfigCoap
	ContentType string
	StatusCode  int64
}
