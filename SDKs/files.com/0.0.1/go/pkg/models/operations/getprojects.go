package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetProjectsRequest struct {
	QueryParams GetProjectsQueryParams
}

type GetProjectsResponse struct {
	ContentType     string
	ProjectEntities []shared.ProjectEntity
	StatusCode      int64
}
