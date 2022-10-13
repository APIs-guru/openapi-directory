package operations

import (
	"openapi/pkg/models/shared"
)

type GitListMatchingRefsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type GitListMatchingRefsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GitListMatchingRefsRequest struct {
	PathParams  GitListMatchingRefsPathParams
	QueryParams GitListMatchingRefsQueryParams
}

type GitListMatchingRefsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	GitRefs     []shared.GitRef
}
