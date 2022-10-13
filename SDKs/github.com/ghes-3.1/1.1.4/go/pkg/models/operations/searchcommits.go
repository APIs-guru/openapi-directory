package operations

import (
	"openapi/pkg/models/shared"
)

type SearchCommitsSortEnum string

const (
	SearchCommitsSortEnumAuthorDate    SearchCommitsSortEnum = "author-date"
	SearchCommitsSortEnumCommitterDate SearchCommitsSortEnum = "committer-date"
)

type SearchCommitsQueryParams struct {
	Order   *shared.OrderEnum      `queryParam:"style=form,explode=true,name=order"`
	Page    *int64                 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                 `queryParam:"style=form,explode=true,name=per_page"`
	Q       string                 `queryParam:"style=form,explode=true,name=q"`
	Sort    *SearchCommitsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchCommitsRequest struct {
	QueryParams SearchCommitsQueryParams
}

type SearchCommits200ApplicationJSON struct {
	IncompleteResults bool                            `json:"incomplete_results"`
	Items             []shared.CommitSearchResultItem `json:"items"`
	TotalCount        int64                           `json:"total_count"`
}

type SearchCommits415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type SearchCommitsResponse struct {
	ContentType                           string
	StatusCode                            int64
	SearchCommits200ApplicationJSONObject *SearchCommits200ApplicationJSON
	SearchCommits415ApplicationJSONObject *SearchCommits415ApplicationJSON
}
