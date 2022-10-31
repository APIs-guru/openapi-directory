package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsCreateRemoveTokenForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsCreateRemoveTokenForRepoRequest struct {
	PathParams ActionsCreateRemoveTokenForRepoPathParams
}

type ActionsCreateRemoveTokenForRepoResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationToken *shared.AuthenticationToken
}
