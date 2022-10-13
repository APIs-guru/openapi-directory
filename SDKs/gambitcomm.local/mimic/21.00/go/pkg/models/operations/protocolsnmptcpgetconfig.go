package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSnmptcpGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmptcpGetConfigRequest struct {
	PathParams ProtocolSnmptcpGetConfigPathParams
}

type ProtocolSnmptcpGetConfigResponse struct {
	ConfigSnmptcp *shared.ConfigSnmptcp
	ContentType   string
	StatusCode    int64
}
