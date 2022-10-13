package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSnmpv3GetConfigPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmpv3GetConfigRequest struct {
	PathParams ProtocolSnmpv3GetConfigPathParams
}

type ProtocolSnmpv3GetConfigResponse struct {
	ConfigSnmPv3 *shared.ConfigSnmPv3
	ContentType  string
	StatusCode   int64
}
