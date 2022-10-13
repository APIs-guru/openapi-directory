package operations

import (
	"openapi/pkg/models/shared"
)

type SearchReposSortEnum string

const (
	SearchReposSortEnumStars            SearchReposSortEnum = "stars"
	SearchReposSortEnumForks            SearchReposSortEnum = "forks"
	SearchReposSortEnumHelpWantedIssues SearchReposSortEnum = "help-wanted-issues"
	SearchReposSortEnumUpdated          SearchReposSortEnum = "updated"
)

type SearchReposQueryParams struct {
	Order   *shared.OrderEnum    `queryParam:"style=form,explode=true,name=order"`
	Page    *int64               `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64               `queryParam:"style=form,explode=true,name=per_page"`
	Q       string               `queryParam:"style=form,explode=true,name=q"`
	Sort    *SearchReposSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type SearchReposRequest struct {
	QueryParams SearchReposQueryParams
}

type SearchRepos200ApplicationJSON struct {
	IncompleteResults bool                          `json:"incomplete_results"`
	Items             []shared.RepoSearchResultItem `json:"items"`
	TotalCount        int64                         `json:"total_count"`
}

type SearchRepos503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type SearchReposResponse struct {
	ContentType                         string
	StatusCode                          int64
	SearchRepos200ApplicationJSONObject *SearchRepos200ApplicationJSON
	SearchRepos503ApplicationJSONObject *SearchRepos503ApplicationJSON
	ValidationError                     *shared.ValidationError
}
