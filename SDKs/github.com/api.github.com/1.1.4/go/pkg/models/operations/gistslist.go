package operations

import (
	"openapi/pkg/models/shared"
)

type GistsListQueryParams struct {
	Page    *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Since   *string `queryParam:"style=form,explode=true,name=since"`
}

type GistsListRequest struct {
	QueryParams GistsListQueryParams
}

type GistsListResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BaseGists   []shared.BaseGist
	BasicError  *shared.BasicError
}
