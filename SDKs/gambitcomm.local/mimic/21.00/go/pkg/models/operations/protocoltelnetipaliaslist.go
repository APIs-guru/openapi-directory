package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolTelnetIpaliasListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolTelnetIpaliasListRequest struct {
	PathParams ProtocolTelnetIpaliasListPathParams
}

type ProtocolTelnetIpaliasListResponse struct {
	ContentType string
	IPAliases   []shared.IPAlias
	StatusCode  int64
}
