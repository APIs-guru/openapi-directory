package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSflowGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSflowGetConfigRequest struct {
	PathParams ProtocolSflowGetConfigPathParams
}

type ProtocolSflowGetConfigResponse struct {
	ConfigSflow *shared.ConfigSflow
	ContentType string
	StatusCode  int64
}
