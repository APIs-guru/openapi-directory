package operations

import (
	"openapi/pkg/models/shared"
)

type PatchMessageCommentsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchMessageCommentsIDRequestBody struct {
	Body string `multipartForm:"name=body"`
}

type PatchMessageCommentsIDRequest struct {
	PathParams PatchMessageCommentsIDPathParams
	Request    PatchMessageCommentsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchMessageCommentsIDResponse struct {
	ContentType          string
	MessageCommentEntity *shared.MessageCommentEntity
	StatusCode           int64
}
