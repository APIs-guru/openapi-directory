package operations

import (
	"openapi/pkg/models/shared"
)

type PostChangePasswordRequestBodySample struct {
	OldPassword *string `json:"old_password"`
	Password    *string `json:"password"`
}

type PostChangePasswordRequest struct {
	Request PostChangePasswordRequestBodySample `request:"mediaType=application/json"`
}

type PostChangePasswordResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
}
