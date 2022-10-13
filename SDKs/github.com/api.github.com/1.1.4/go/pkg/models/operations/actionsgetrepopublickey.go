package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetRepoPublicKeyPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsGetRepoPublicKeyRequest struct {
	PathParams ActionsGetRepoPublicKeyPathParams
}

type ActionsGetRepoPublicKeyResponse struct {
	ContentType      string
	StatusCode       int64
	ActionsPublicKey *shared.ActionsPublicKey
}
