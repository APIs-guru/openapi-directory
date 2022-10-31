package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListContributorsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListContributorsQueryParams struct {
	Anon    *string `queryParam:"style=form,explode=true,name=anon"`
	Page    *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64  `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListContributorsRequest struct {
	PathParams  ReposListContributorsPathParams
	QueryParams ReposListContributorsQueryParams
}

type ReposListContributorsResponse struct {
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
	BasicError   *shared.BasicError
	Contributors []shared.Contributor
}
