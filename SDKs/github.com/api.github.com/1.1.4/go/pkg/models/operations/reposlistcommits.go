package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListCommitsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListCommitsQueryParams struct {
	Author  *string `queryParam:"style=form,explode=true,name=author"`
	LastSha *string `queryParam:"style=form,explode=true,name=last_sha"`
	Page    *int64  `queryParam:"style=form,explode=true,name=page"`
	Path    *string `queryParam:"style=form,explode=true,name=path"`
	PerPage *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Sha     *string `queryParam:"style=form,explode=true,name=sha"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
	Top     *string `queryParam:"style=form,explode=true,name=top"`
	Until   *string `queryParam:"style=form,explode=true,name=until"`
}

type ReposListCommitsRequest struct {
	PathParams  ReposListCommitsPathParams
	QueryParams ReposListCommitsQueryParams
}

type ReposListCommitsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Commits     []shared.Commit
	ScimError   *shared.ScimError
}
