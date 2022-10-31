package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsGetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsGetRequest struct {
	PathParams ProjectsGetPathParams
}

type ProjectsGetResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Project     *shared.Project
}
