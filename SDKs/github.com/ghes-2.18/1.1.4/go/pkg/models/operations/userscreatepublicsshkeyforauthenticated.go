package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCreatePublicSSHKeyForAuthenticatedRequestBody struct {
	Key   string  `json:"key"`
	Title *string `json:"title"`
}

type UsersCreatePublicSSHKeyForAuthenticatedRequest struct {
	Request *UsersCreatePublicSSHKeyForAuthenticatedRequestBody `request:"mediaType=application/json"`
}

type UsersCreatePublicSSHKeyForAuthenticatedResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Key             *shared.Key
	ValidationError *shared.ValidationError
}
