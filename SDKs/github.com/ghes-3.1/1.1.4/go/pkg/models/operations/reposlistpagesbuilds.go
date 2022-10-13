package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListPagesBuildsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListPagesBuildsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListPagesBuildsRequest struct {
	PathParams  ReposListPagesBuildsPathParams
	QueryParams ReposListPagesBuildsQueryParams
}

type ReposListPagesBuildsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	PageBuilds  []shared.PageBuild
}
