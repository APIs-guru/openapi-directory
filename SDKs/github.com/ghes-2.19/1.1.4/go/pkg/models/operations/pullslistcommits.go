package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListCommitsPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListCommitsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PullsListCommitsRequest struct {
	PathParams  PullsListCommitsPathParams
	QueryParams PullsListCommitsQueryParams
}

type PullsListCommitsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Commits     []shared.Commit
}
