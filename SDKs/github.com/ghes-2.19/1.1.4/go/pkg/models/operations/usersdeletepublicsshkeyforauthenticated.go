package operations

import (
	"openapi/pkg/models/shared"
)

type UsersDeletePublicSSHKeyForAuthenticatedPathParams struct {
	KeyID int64 `pathParam:"style=simple,explode=false,name=key_id"`
}

type UsersDeletePublicSSHKeyForAuthenticatedRequest struct {
	PathParams UsersDeletePublicSSHKeyForAuthenticatedPathParams
}

type UsersDeletePublicSSHKeyForAuthenticatedResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
