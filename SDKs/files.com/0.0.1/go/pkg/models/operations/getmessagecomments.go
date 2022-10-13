package operations

import (
	"openapi/pkg/models/shared"
)

type GetMessageCommentsQueryParams struct {
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	MessageID int32   `queryParam:"style=form,explode=true,name=message_id"`
	PerPage   *int32  `queryParam:"style=form,explode=true,name=per_page"`
	UserID    *int32  `queryParam:"style=form,explode=true,name=user_id"`
}

type GetMessageCommentsRequest struct {
	QueryParams GetMessageCommentsQueryParams
}

type GetMessageCommentsResponse struct {
	ContentType            string
	MessageCommentEntities []shared.MessageCommentEntity
	StatusCode             int64
}
