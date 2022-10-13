package operations

import (
	"openapi/pkg/models/shared"
)

type GistsListCommentsPathParams struct {
	GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
}

type GistsListCommentsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GistsListCommentsRequest struct {
	PathParams  GistsListCommentsPathParams
	QueryParams GistsListCommentsQueryParams
}

type GistsListCommentsResponse struct {
	ContentType  string
	Headers      map[string][]string
	StatusCode   int64
	BasicError   *shared.BasicError
	GistComments []shared.GistComment
}
