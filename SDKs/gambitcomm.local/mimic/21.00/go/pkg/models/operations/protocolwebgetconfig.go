package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolWebGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolWebGetConfigRequest struct {
	PathParams ProtocolWebGetConfigPathParams
}

type ProtocolWebGetConfigResponse struct {
	ConfigWeb   *shared.ConfigWeb
	ContentType string
	StatusCode  int64
}
