package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetCombinedStatusForRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetCombinedStatusForRefQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposGetCombinedStatusForRefRequest struct {
	PathParams  ReposGetCombinedStatusForRefPathParams
	QueryParams ReposGetCombinedStatusForRefQueryParams
}

type ReposGetCombinedStatusForRefResponse struct {
	ContentType          string
	StatusCode           int64
	BasicError           *shared.BasicError
	CombinedCommitStatus *shared.CombinedCommitStatus
}
