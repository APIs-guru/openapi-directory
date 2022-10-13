package operations

import (
	"openapi/pkg/models/shared"
)

type FileActionCopyPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type FileActionCopyRequestBody struct {
	Destination string `multipartForm:"name=destination"`
	Structure   *bool  `multipartForm:"name=structure"`
}

type FileActionCopyRequest struct {
	PathParams FileActionCopyPathParams
	Request    FileActionCopyRequestBody `request:"mediaType=multipart/form-data"`
}

type FileActionCopyResponse struct {
	ContentType      string
	FileActionEntity *shared.FileActionEntity
	StatusCode       int64
}
