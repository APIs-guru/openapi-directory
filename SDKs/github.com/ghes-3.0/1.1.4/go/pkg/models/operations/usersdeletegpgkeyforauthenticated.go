package operations

import (
	"openapi/pkg/models/shared"
)

type UsersDeleteGpgKeyForAuthenticatedPathParams struct {
	GpgKeyID int64 `pathParam:"style=simple,explode=false,name=gpg_key_id"`
}

type UsersDeleteGpgKeyForAuthenticatedRequest struct {
	PathParams UsersDeleteGpgKeyForAuthenticatedPathParams
}

type UsersDeleteGpgKeyForAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
