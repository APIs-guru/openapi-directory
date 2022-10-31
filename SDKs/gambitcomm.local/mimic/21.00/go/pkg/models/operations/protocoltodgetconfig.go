package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTodGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTodGetConfigRequest struct {
	PathParams ProtocolTodGetConfigPathParams
}

type ProtocolTodGetConfigResponse struct {
	ConfigTod   *shared.ConfigTod
	ContentType string
	StatusCode  int64
}
