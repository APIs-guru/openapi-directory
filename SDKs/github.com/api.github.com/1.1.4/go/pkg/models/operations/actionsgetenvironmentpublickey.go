package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetEnvironmentPublicKeyPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	RepositoryID    int64  `pathParam:"style=simple,explode=false,name=repository_id"`
}

type ActionsGetEnvironmentPublicKeyRequest struct {
	PathParams ActionsGetEnvironmentPublicKeyPathParams
}

type ActionsGetEnvironmentPublicKeyResponse struct {
	ContentType      string
	StatusCode       int64
	ActionsPublicKey *shared.ActionsPublicKey
}
