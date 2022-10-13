package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListReviewsPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListReviewsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PullsListReviewsRequest struct {
	PathParams  PullsListReviewsPathParams
	QueryParams PullsListReviewsQueryParams
}

type PullsListReviewsResponse struct {
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
	PullRequestReviews []shared.PullRequestReview
}
