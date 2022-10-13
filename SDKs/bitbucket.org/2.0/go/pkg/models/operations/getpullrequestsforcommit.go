package operations

import (
	"openapi/pkg/models/shared"
)

type GetPullrequestsForCommitPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetPullrequestsForCommitQueryParams struct {
	Page    *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagelen *int32 `queryParam:"style=form,explode=true,name=pagelen"`
}

type GetPullrequestsForCommitRequest struct {
	PathParams  GetPullrequestsForCommitPathParams
	QueryParams GetPullrequestsForCommitQueryParams
}

type GetPullrequestsForCommitResponse struct {
	ContentType           string
	StatusCode            int64
	Error                 map[string]interface{}
	PaginatedPullrequests *shared.PaginatedPullrequests
}
