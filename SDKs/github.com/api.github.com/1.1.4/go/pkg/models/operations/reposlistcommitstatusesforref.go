package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListCommitStatusesForRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListCommitStatusesForRefQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListCommitStatusesForRefRequest struct {
	PathParams  ReposListCommitStatusesForRefPathParams
	QueryParams ReposListCommitStatusesForRefQueryParams
}

type ReposListCommitStatusesForRefResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Statuses    []shared.Status
}
