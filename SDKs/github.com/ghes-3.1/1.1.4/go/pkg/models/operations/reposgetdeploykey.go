package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetDeployKeyPathParams struct {
	KeyID int64  `pathParam:"style=simple,explode=false,name=key_id"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetDeployKeyRequest struct {
	PathParams ReposGetDeployKeyPathParams
}

type ReposGetDeployKeyResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	DeployKey   *shared.DeployKey
}
