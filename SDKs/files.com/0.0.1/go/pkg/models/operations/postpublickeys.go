package operations

import (
	"openapi/pkg/models/shared"
)

type PostPublicKeysRequestBody struct {
	PublicKey string `multipartForm:"name=public_key"`
	Title     string `multipartForm:"name=title"`
	UserID    *int32 `multipartForm:"name=user_id"`
}

type PostPublicKeysRequest struct {
	Request *PostPublicKeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostPublicKeysResponse struct {
	ContentType     string
	PublicKeyEntity *shared.PublicKeyEntity
	StatusCode      int64
}
