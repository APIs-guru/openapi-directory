package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportsForCommitPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetReportsForCommitRequest struct {
	PathParams GetReportsForCommitPathParams
}

type GetReportsForCommitResponse struct {
	ContentType      string
	StatusCode       int64
	PaginatedReports *shared.PaginatedReports
}
