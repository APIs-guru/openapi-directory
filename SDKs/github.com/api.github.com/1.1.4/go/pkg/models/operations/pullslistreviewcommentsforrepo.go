package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListReviewCommentsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListReviewCommentsForRepoDirectionEnum string

const (
	PullsListReviewCommentsForRepoDirectionEnumAsc  PullsListReviewCommentsForRepoDirectionEnum = "asc"
	PullsListReviewCommentsForRepoDirectionEnumDesc PullsListReviewCommentsForRepoDirectionEnum = "desc"
)

type PullsListReviewCommentsForRepoSortEnum string

const (
	PullsListReviewCommentsForRepoSortEnumCreated   PullsListReviewCommentsForRepoSortEnum = "created"
	PullsListReviewCommentsForRepoSortEnumUpdated   PullsListReviewCommentsForRepoSortEnum = "updated"
	PullsListReviewCommentsForRepoSortEnumCreatedAt PullsListReviewCommentsForRepoSortEnum = "created_at"
)

type PullsListReviewCommentsForRepoQueryParams struct {
	Direction *PullsListReviewCommentsForRepoDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                       `queryParam:"style=form,explode=true,name=per_page"`
	Since     *string                                      `queryParam:"style=form,explode=true,name=since"`
	Sort      *PullsListReviewCommentsForRepoSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type PullsListReviewCommentsForRepoRequest struct {
	PathParams  PullsListReviewCommentsForRepoPathParams
	QueryParams PullsListReviewCommentsForRepoQueryParams
}

type PullsListReviewCommentsForRepoResponse struct {
	ContentType               string
	Headers                   map[string][]string
	StatusCode                int64
	PullRequestReviewComments []shared.PullRequestReviewComment
}
