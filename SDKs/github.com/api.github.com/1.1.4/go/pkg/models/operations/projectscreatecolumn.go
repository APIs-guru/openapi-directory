package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsCreateColumnPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsCreateColumnRequestBody struct {
	Name string `json:"name"`
}

type ProjectsCreateColumnRequest struct {
	PathParams ProjectsCreateColumnPathParams
	Request    *ProjectsCreateColumnRequestBody `request:"mediaType=application/json"`
}

type ProjectsCreateColumnResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	ProjectColumn         *shared.ProjectColumn
	ValidationErrorSimple *shared.ValidationErrorSimple
}
