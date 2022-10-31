package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListBranchesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListBranchesQueryParams struct {
	Page      *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64 `queryParam:"style=form,explode=true,name=per_page"`
	Protected *bool  `queryParam:"style=form,explode=true,name=protected"`
}

type ReposListBranchesRequest struct {
	PathParams  ReposListBranchesPathParams
	QueryParams ReposListBranchesQueryParams
}

type ReposListBranchesResponse struct {
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	BasicError    *shared.BasicError
	ShortBranches []shared.ShortBranch
}
