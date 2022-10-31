package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostFilesPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type PostFilesPathRequestBody struct {
	Action        *string    `multipartForm:"name=action"`
	EtagsEtag     []string   `multipartForm:"name=etags[etag]"`
	EtagsPart     []int32    `multipartForm:"name=etags[part]"`
	Length        *int32     `multipartForm:"name=length"`
	MkdirParents  *bool      `multipartForm:"name=mkdir_parents"`
	Part          *int32     `multipartForm:"name=part"`
	Parts         *int32     `multipartForm:"name=parts"`
	ProvidedMtime *time.Time `multipartForm:"name=provided_mtime"`
	Ref           *string    `multipartForm:"name=ref"`
	Restart       *int32     `multipartForm:"name=restart"`
	Size          *int32     `multipartForm:"name=size"`
	Structure     *string    `multipartForm:"name=structure"`
	WithRename    *bool      `multipartForm:"name=with_rename"`
}

type PostFilesPathRequest struct {
	PathParams PostFilesPathPathParams
	Request    *PostFilesPathRequestBody `request:"mediaType=multipart/form-data"`
}

type PostFilesPathResponse struct {
	ContentType string
	FileEntity  *shared.FileEntity
	StatusCode  int64
}
