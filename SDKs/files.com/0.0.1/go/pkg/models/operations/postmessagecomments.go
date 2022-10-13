package operations

import (
	"openapi/pkg/models/shared"
)

type PostMessageCommentsRequestBody struct {
	Body   string `multipartForm:"name=body"`
	UserID *int32 `multipartForm:"name=user_id"`
}

type PostMessageCommentsRequest struct {
	Request *PostMessageCommentsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostMessageCommentsResponse struct {
	ContentType          string
	MessageCommentEntity *shared.MessageCommentEntity
	StatusCode           int64
}
