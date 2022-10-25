package operations

import (
	"openapi/pkg/models/shared"
)

type PostChangePasswordSample struct {
	OldPassword *string `json:"old_password,omitempty"`
	Password    *string `json:"password,omitempty"`
}

type PostChangePasswordRequest struct {
	Request PostChangePasswordSample `request:"mediaType=application/json"`
}

type PostChangePasswordResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
}
