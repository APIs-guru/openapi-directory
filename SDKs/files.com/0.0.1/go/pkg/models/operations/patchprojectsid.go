package operations

import (
	"openapi/pkg/models/shared"
)

type PatchProjectsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PatchProjectsIDRequestBody struct {
	GlobalAccess string `multipartForm:"name=global_access"`
}

type PatchProjectsIDRequest struct {
	PathParams PatchProjectsIDPathParams
	Request    PatchProjectsIDRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchProjectsIDResponse struct {
	ContentType   string
	ProjectEntity *shared.ProjectEntity
	StatusCode    int64
}
