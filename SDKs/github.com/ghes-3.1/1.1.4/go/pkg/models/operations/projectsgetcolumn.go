package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsGetColumnPathParams struct {
	ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
}

type ProjectsGetColumnRequest struct {
	PathParams ProjectsGetColumnPathParams
}

type ProjectsGetColumnResponse struct {
	ContentType   string
	StatusCode    int64
	BasicError    *shared.BasicError
	ProjectColumn *shared.ProjectColumn
}
