package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolCoapGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolCoapGetConfigRequest struct {
	PathParams ProtocolCoapGetConfigPathParams
}

type ProtocolCoapGetConfigResponse struct {
	ConfigCoap  *shared.ConfigCoap
	ContentType string
	StatusCode  int64
}
