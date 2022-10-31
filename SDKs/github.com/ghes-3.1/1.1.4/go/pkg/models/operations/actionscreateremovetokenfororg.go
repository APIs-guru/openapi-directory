package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsCreateRemoveTokenForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsCreateRemoveTokenForOrgRequest struct {
	PathParams ActionsCreateRemoveTokenForOrgPathParams
}

type ActionsCreateRemoveTokenForOrgResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationToken *shared.AuthenticationToken
}
