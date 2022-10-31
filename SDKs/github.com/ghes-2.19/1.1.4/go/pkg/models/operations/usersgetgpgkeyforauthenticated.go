package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetGpgKeyForAuthenticatedPathParams struct {
	GpgKeyID int64 `pathParam:"style=simple,explode=false,name=gpg_key_id"`
}

type UsersGetGpgKeyForAuthenticatedRequest struct {
	PathParams UsersGetGpgKeyForAuthenticatedPathParams
}

type UsersGetGpgKeyForAuthenticatedResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	GpgKey      *shared.GpgKey
}
