package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListPullRequestsAssociatedWithCommitPathParams struct {
	CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
	Owner     string `pathParam:"style=simple,explode=false,name=owner"`
	Repo      string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListPullRequestsAssociatedWithCommitQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListPullRequestsAssociatedWithCommit415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposListPullRequestsAssociatedWithCommitRequest struct {
	PathParams  ReposListPullRequestsAssociatedWithCommitPathParams
	QueryParams ReposListPullRequestsAssociatedWithCommitQueryParams
}

type ReposListPullRequestsAssociatedWithCommitResponse struct {
	ContentType                                                       string
	Headers                                                           map[string][]string
	StatusCode                                                        int64
	PullRequestSimples                                                []shared.PullRequestSimple
	ReposListPullRequestsAssociatedWithCommit415ApplicationJSONObject *ReposListPullRequestsAssociatedWithCommit415ApplicationJSON
}
