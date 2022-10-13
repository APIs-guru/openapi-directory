package operations

import (
	"openapi/pkg/models/shared"
)

type PostFileCommentReactionsRequestBody struct {
	Emoji         string `multipartForm:"name=emoji"`
	FileCommentID int32  `multipartForm:"name=file_comment_id"`
	UserID        *int32 `multipartForm:"name=user_id"`
}

type PostFileCommentReactionsRequest struct {
	Request *PostFileCommentReactionsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostFileCommentReactionsResponse struct {
	ContentType               string
	FileCommentReactionEntity *shared.FileCommentReactionEntity
	StatusCode                int64
}
