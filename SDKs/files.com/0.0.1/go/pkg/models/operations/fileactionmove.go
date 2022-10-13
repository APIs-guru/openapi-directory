package operations

import (
	"openapi/pkg/models/shared"
)

type FileActionMovePathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type FileActionMoveRequestBody struct {
	Destination string `multipartForm:"name=destination"`
}

type FileActionMoveRequest struct {
	PathParams FileActionMovePathParams
	Request    FileActionMoveRequestBody `request:"mediaType=multipart/form-data"`
}

type FileActionMoveResponse struct {
	ContentType      string
	FileActionEntity *shared.FileActionEntity
	StatusCode       int64
}
