package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListEventsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListEventsForRepoQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type IssuesListEventsForRepoRequest struct {
	PathParams  IssuesListEventsForRepoPathParams
	QueryParams IssuesListEventsForRepoQueryParams
}

type IssuesListEventsForRepoResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	IssueEvents     []shared.IssueEvent
	ValidationError *shared.ValidationError
}
