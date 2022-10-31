package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesListAssigneesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesListAssigneesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type IssuesListAssigneesRequest struct {
	PathParams  IssuesListAssigneesPathParams
	QueryParams IssuesListAssigneesQueryParams
}

type IssuesListAssigneesResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	SimpleUsers []shared.SimpleUser
}
