package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSSHGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSSHGetConfigRequest struct {
	PathParams ProtocolSSHGetConfigPathParams
}

type ProtocolSSHGetConfigResponse struct {
	ConfigSSH   *shared.ConfigSSH
	ContentType string
	StatusCode  int64
}
