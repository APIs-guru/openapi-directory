package operations

import (
	"openapi/pkg/models/shared"
)

type UploadFileAsMultipartPublic1PathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
	UploadID  string `pathParam:"style=simple,explode=false,name=upload_id"`
}

type UploadFileAsMultipartPublic1Headers struct {
	ContentRange   *string      `header:"name=Content-Range"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type UploadFileAsMultipartPublic1RequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type UploadFileAsMultipartPublic1RequestBody struct {
	File *UploadFileAsMultipartPublic1RequestBodyFile `multipartForm:"file"`
}

type UploadFileAsMultipartPublic1Request struct {
	PathParams UploadFileAsMultipartPublic1PathParams
	Headers    UploadFileAsMultipartPublic1Headers
	Request    *UploadFileAsMultipartPublic1RequestBody `request:"mediaType=multipart/form-data"`
}

type UploadFileAsMultipartPublic1Response struct {
	ChunkUploadResponse *shared.ChunkUploadResponse
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	StatusCode          int64
}
