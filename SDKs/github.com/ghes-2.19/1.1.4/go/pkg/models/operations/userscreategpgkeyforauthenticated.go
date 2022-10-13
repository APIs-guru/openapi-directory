package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCreateGpgKeyForAuthenticatedRequestBody struct {
	ArmoredPublicKey string `json:"armored_public_key"`
}

type UsersCreateGpgKeyForAuthenticatedRequest struct {
	Request *UsersCreateGpgKeyForAuthenticatedRequestBody `request:"mediaType=application/json"`
}

type UsersCreateGpgKeyForAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	GpgKey          *shared.GpgKey
	ValidationError *shared.ValidationError
}
