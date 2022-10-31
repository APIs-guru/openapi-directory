package operations

import (
	"openapi/pkg/models/shared"
)

type PatchFileCommentsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchFileCommentsIDRequestBody struct {
	Body string `multipartForm:"name=body"`
}

type PatchFileCommentsIDRequest struct {
	PathParams PatchFileCommentsIDPathParams
	Request    PatchFileCommentsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchFileCommentsIDResponse struct {
	ContentType       string
	FileCommentEntity *shared.FileCommentEntity
	StatusCode        int64
}
