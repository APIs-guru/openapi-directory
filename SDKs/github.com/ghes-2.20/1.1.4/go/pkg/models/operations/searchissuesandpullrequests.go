package operations

import (
	"openapi/pkg/models/shared"
)

type SearchIssuesAndPullRequestsSortEnum string

const (
	SearchIssuesAndPullRequestsSortEnumComments              SearchIssuesAndPullRequestsSortEnum = "comments"
	SearchIssuesAndPullRequestsSortEnumReactions             SearchIssuesAndPullRequestsSortEnum = "reactions"
	SearchIssuesAndPullRequestsSortEnumReactionsPlus1        SearchIssuesAndPullRequestsSortEnum = "reactions-+1"
	SearchIssuesAndPullRequestsSortEnumReactions1            SearchIssuesAndPullRequestsSortEnum = "reactions--1"
	SearchIssuesAndPullRequestsSortEnumReactionsSmile        SearchIssuesAndPullRequestsSortEnum = "reactions-smile"
	SearchIssuesAndPullRequestsSortEnumReactionsThinkingFace SearchIssuesAndPullRequestsSortEnum = "reactions-thinking_face"
	SearchIssuesAndPullRequestsSortEnumReactionsHeart        SearchIssuesAndPullRequestsSortEnum = "reactions-heart"
	SearchIssuesAndPullRequestsSortEnumReactionsTada         SearchIssuesAndPullRequestsSortEnum = "reactions-tada"
	SearchIssuesAndPullRequestsSortEnumInteractions          SearchIssuesAndPullRequestsSortEnum = "interactions"
	SearchIssuesAndPullRequestsSortEnumCreated               SearchIssuesAndPullRequestsSortEnum = "created"
	SearchIssuesAndPullRequestsSortEnumUpdated               SearchIssuesAndPullRequestsSortEnum = "updated"
)

type SearchIssuesAndPullRequestsQueryParams struct {
	Order   *shared.OrderEnum                    `queryParam:"style=form,explode=true,name=order"`
	Page    *int64                               `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                               `queryParam:"style=form,explode=true,name=per_page"`
	Q       string                               `queryParam:"style=form,explode=true,name=q"`
	Sort    *SearchIssuesAndPullRequestsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchIssuesAndPullRequestsRequest struct {
	QueryParams SearchIssuesAndPullRequestsQueryParams
}

type SearchIssuesAndPullRequests200ApplicationJSON struct {
	IncompleteResults bool                           `json:"incomplete_results"`
	Items             []shared.IssueSearchResultItem `json:"items"`
	TotalCount        int64                          `json:"total_count"`
}

type SearchIssuesAndPullRequests503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type SearchIssuesAndPullRequestsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	BasicError                                          *shared.BasicError
	SearchIssuesAndPullRequests200ApplicationJSONObject *SearchIssuesAndPullRequests200ApplicationJSON
	SearchIssuesAndPullRequests503ApplicationJSONObject *SearchIssuesAndPullRequests503ApplicationJSON
	ValidationError                                     *shared.ValidationError
}
