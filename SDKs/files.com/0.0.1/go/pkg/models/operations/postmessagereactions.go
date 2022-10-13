package operations

import (
	"openapi/pkg/models/shared"
)

type PostMessageReactionsRequestBody struct {
	Emoji  string `multipartForm:"name=emoji"`
	UserID *int32 `multipartForm:"name=user_id"`
}

type PostMessageReactionsRequest struct {
	Request *PostMessageReactionsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostMessageReactionsResponse struct {
	ContentType           string
	MessageReactionEntity *shared.MessageReactionEntity
	StatusCode            int64
}
