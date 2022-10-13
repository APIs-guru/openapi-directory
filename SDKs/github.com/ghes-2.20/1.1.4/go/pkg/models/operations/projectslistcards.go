package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsListCardsPathParams struct {
	ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
}

type ProjectsListCardsArchivedStateEnum string

const (
	ProjectsListCardsArchivedStateEnumAll         ProjectsListCardsArchivedStateEnum = "all"
	ProjectsListCardsArchivedStateEnumArchived    ProjectsListCardsArchivedStateEnum = "archived"
	ProjectsListCardsArchivedStateEnumNotArchived ProjectsListCardsArchivedStateEnum = "not_archived"
)

type ProjectsListCardsQueryParams struct {
	ArchivedState *ProjectsListCardsArchivedStateEnum `queryParam:"style=form,explode=true,name=archived_state"`
	Page          *int64                              `queryParam:"style=form,explode=true,name=page"`
	PerPage       *int64                              `queryParam:"style=form,explode=true,name=per_page"`
}

type ProjectsListCardsRequest struct {
	PathParams  ProjectsListCardsPathParams
	QueryParams ProjectsListCardsQueryParams
}

type ProjectsListCardsResponse struct {
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
	BasicError   *shared.BasicError
	ProjectCards []shared.ProjectCard
}
