package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolProxyGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolProxyGetTraceRequest struct {
	PathParams ProtocolProxyGetTracePathParams
}

type ProtocolProxyGetTraceResponse struct {
	ConfigProxy *shared.ConfigProxy
	ContentType string
	StatusCode  int64
}
