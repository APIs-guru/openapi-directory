package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsCreateForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ProjectsCreateForRepoRequestBody struct {
	Body *string `json:"body,omitempty"`
	Name string  `json:"name"`
}

type ProjectsCreateForRepoRequest struct {
	PathParams ProjectsCreateForRepoPathParams
	Request    *ProjectsCreateForRepoRequestBody `request:"mediaType=application/json"`
}

type ProjectsCreateForRepoResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	Project               *shared.Project
	ValidationErrorSimple *shared.ValidationErrorSimple
}
