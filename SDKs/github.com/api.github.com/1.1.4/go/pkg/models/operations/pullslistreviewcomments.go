package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListReviewCommentsPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	PullNumber int64  `pathParam:"style=simple,explode=false,name=pull_number"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListReviewCommentsDirectionEnum string

const (
	PullsListReviewCommentsDirectionEnumAsc  PullsListReviewCommentsDirectionEnum = "asc"
	PullsListReviewCommentsDirectionEnumDesc PullsListReviewCommentsDirectionEnum = "desc"
)

type PullsListReviewCommentsQueryParams struct {
	Direction *PullsListReviewCommentsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                `queryParam:"style=form,explode=true,name=per_page"`
	Since     *string                               `queryParam:"style=form,explode=true,name=since"`
	Sort      *shared.SortEnum                      `queryParam:"style=form,explode=true,name=sort"`
}

type PullsListReviewCommentsRequest struct {
	PathParams  PullsListReviewCommentsPathParams
	QueryParams PullsListReviewCommentsQueryParams
}

type PullsListReviewCommentsResponse struct {
	ContentType               string
	Headers                   map[string][]string
	StatusCode                int64
	PullRequestReviewComments []shared.PullRequestReviewComment
}
