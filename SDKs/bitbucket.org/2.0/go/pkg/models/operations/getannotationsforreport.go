package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnnotationsForReportPathParams struct {
	Commit    string `pathParam:"style=simple,explode=false,name=commit"`
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	ReportID  string `pathParam:"style=simple,explode=false,name=reportId"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetAnnotationsForReportRequest struct {
	PathParams GetAnnotationsForReportPathParams
}

type GetAnnotationsForReportResponse struct {
	ContentType          string
	StatusCode           int64
	PaginatedAnnotations *shared.PaginatedAnnotations
}
