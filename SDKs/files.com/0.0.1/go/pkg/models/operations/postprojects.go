package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectsRequestBody struct {
	GlobalAccess string `multipartForm:"name=global_access"`
}

type PostProjectsRequest struct {
	Request PostProjectsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostProjectsResponse struct {
	ContentType   string
	ProjectEntity *shared.ProjectEntity
	StatusCode    int64
}
