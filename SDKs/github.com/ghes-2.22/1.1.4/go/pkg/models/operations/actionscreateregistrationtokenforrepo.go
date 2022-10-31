package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsCreateRegistrationTokenForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsCreateRegistrationTokenForRepoRequest struct {
	PathParams ActionsCreateRegistrationTokenForRepoPathParams
}

type ActionsCreateRegistrationTokenForRepoResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationToken *shared.AuthenticationToken
}
