package operations

import (
	"openapi/pkg/models/shared"
)

type ProtocolSnmptcpIpaliasListPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ProtocolSnmptcpIpaliasListRequest struct {
	PathParams ProtocolSnmptcpIpaliasListPathParams
}

type ProtocolSnmptcpIpaliasListResponse struct {
	ContentType string
	IPAliases   []shared.IPAlias
	StatusCode  int64
}
