package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTelnetGetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetGetConfigRequest struct {
	PathParams ProtocolTelnetGetConfigPathParams
}

type ProtocolTelnetGetConfigResponse struct {
	ConfigTelnet *shared.ConfigTelnet
	ContentType  string
	StatusCode   int64
}
