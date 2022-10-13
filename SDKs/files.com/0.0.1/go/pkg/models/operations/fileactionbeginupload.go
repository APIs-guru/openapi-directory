package operations

import (
	"openapi/pkg/models/shared"
)

type FileActionBeginUploadPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type FileActionBeginUploadRequestBody struct {
	MkdirParents *bool   `multipartForm:"name=mkdir_parents"`
	Part         *int32  `multipartForm:"name=part"`
	Parts        *int32  `multipartForm:"name=parts"`
	Ref          *string `multipartForm:"name=ref"`
	Restart      *int32  `multipartForm:"name=restart"`
	WithRename   *bool   `multipartForm:"name=with_rename"`
}

type FileActionBeginUploadRequest struct {
	PathParams FileActionBeginUploadPathParams
	Request    *FileActionBeginUploadRequestBody `request:"mediaType=multipart/form-data"`
}

type FileActionBeginUploadResponse struct {
	ContentType            string
	FileUploadPartEntities []shared.FileUploadPartEntity
	StatusCode             int64
}
