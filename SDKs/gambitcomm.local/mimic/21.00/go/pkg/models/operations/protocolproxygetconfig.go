package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolProxyGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolProxyGetConfigRequest struct {
	PathParams ProtocolProxyGetConfigPathParams
}

type ProtocolProxyGetConfigResponse struct {
	ConfigProxy *shared.ConfigProxy
	ContentType string
	StatusCode  int64
}
