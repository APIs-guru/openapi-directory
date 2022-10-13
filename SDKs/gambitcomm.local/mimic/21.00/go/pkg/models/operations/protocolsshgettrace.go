package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSSHGetTracePathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSSHGetTraceRequest struct {
	PathParams ProtocolSSHGetTracePathParams
}

type ProtocolSSHGetTraceResponse struct {
	ConfigSSH   *shared.ConfigSSH
	ContentType string
	StatusCode  int64
}
