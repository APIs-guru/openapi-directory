package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListTagsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListTagsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListTagsRequest struct {
	PathParams  ReposListTagsPathParams
	QueryParams ReposListTagsQueryParams
}

type ReposListTagsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Tags        []shared.Tag
}
