package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileAsMultipartPathParams struct {
	UploadID string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type UploadFileAsMultipartHeaders struct {
	ContentRange  *string `header:"name=Content-Range"`
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UploadFileAsMultipartRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UploadFileAsMultipartRequestBody struct {
	File *UploadFileAsMultipartRequestBodyFile `multipartForm:"file"`
}

type UploadFileAsMultipartRequest struct {
	PathParams UploadFileAsMultipartPathParams
	Headers    UploadFileAsMultipartHeaders
	Request    UploadFileAsMultipartRequestBody `request:"mediaType=multipart/form-data"`
}

type UploadFileAsMultipartResponse struct {
	ChunkUploadResponse *shared.ChunkUploadResponse
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	StatusCode          int64
}
