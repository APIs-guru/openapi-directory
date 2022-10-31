package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListReleasesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListReleasesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListReleasesRequest struct {
	PathParams  ReposListReleasesPathParams
	QueryParams ReposListReleasesQueryParams
}

type ReposListReleasesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Releases    []shared.Release
}
