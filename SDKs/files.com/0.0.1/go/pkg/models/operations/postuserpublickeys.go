package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserPublicKeysRequestBody struct {
	PublicKey string `multipartForm:"name=public_key"`
	Title     string `multipartForm:"name=title"`
	UserID    *int32 `multipartForm:"name=user_id"`
}

type PostUserPublicKeysRequest struct {
	Request *PostUserPublicKeysRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUserPublicKeysResponse struct {
	ContentType     string
	PublicKeyEntity *shared.PublicKeyEntity
	StatusCode      int64
}
