package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ProjectsListForRepoStateEnum string

const (
	ProjectsListForRepoStateEnumOpen   ProjectsListForRepoStateEnum = "open"
	ProjectsListForRepoStateEnumClosed ProjectsListForRepoStateEnum = "closed"
	ProjectsListForRepoStateEnumAll    ProjectsListForRepoStateEnum = "all"
)

type ProjectsListForRepoQueryParams struct {
	Page    *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                        `queryParam:"style=form,explode=true,name=per_page"`
	State   *ProjectsListForRepoStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type ProjectsListForRepoRequest struct {
	PathParams  ProjectsListForRepoPathParams
	QueryParams ProjectsListForRepoQueryParams
}

type ProjectsListForRepoResponse struct {
	ContentType           string
	Headers               map[string][]string
	StatusCode            int64
	BasicError            *shared.BasicError
	Projects              []shared.Project
	ValidationErrorSimple *shared.ValidationErrorSimple
}
