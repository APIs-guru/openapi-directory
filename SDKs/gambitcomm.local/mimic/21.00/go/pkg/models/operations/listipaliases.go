package operations

import (
	"openapi/pkg/models/shared"
)

type ListIpaliasesPathParams struct {
	AgentNum int32 `pathParam:"style=simple,explode=false,name=agentNum"`
}

type ListIpaliasesRequest struct {
	PathParams ListIpaliasesPathParams
}

type ListIpaliasesResponse struct {
	ContentType string
	IPAliases   []shared.IPAlias
	StatusCode  int64
}
