package operations

import (
	"openapi/pkg/models/shared"
)

type TrapConfigListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type TrapConfigListRequest struct {
	PathParams TrapConfigListPathParams
}

type TrapConfigListResponse struct {
	ContentType string
	StatusCode  int64
	TrapDests   []shared.TrapDest
}
