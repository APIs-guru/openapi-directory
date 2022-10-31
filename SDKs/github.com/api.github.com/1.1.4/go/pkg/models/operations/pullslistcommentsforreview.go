package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListCommentsForReviewPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
	ReviewID   int64  `pathParam:"style=simple,explode=false,name=review_id"`
}

type PullsListCommentsForReviewQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type PullsListCommentsForReviewRequest struct {
	PathParams  PullsListCommentsForReviewPathParams
	QueryParams PullsListCommentsForReviewQueryParams
}

type PullsListCommentsForReviewResponse struct {
	ContentType    string
	Headers        map[string][]string
	StatusCode     int64
	BasicError     *shared.BasicError
	ReviewComments []shared.ReviewComment
}
