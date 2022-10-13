package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type PostUploadHeaders struct {
	ContentRange *string `header:"style=simple,explode=false,name=Content-Range"`
}

type PostUploadRequest struct {
	QueryParams PostUploadQueryParams
	Headers     PostUploadHeaders
	Request     *shared.TokenUploadPayload `request:"mediaType=multipart/form-data"`
}

type PostUploadResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	Video       *shared.Video
}
