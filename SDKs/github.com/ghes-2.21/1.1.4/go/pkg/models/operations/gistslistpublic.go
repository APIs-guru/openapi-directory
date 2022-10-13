package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GistsListPublicQueryParams struct {
	Page    *int64     `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64     `queryParam:"style=form,explode=true,name=per_page"`
	Since   *time.Time `queryParam:"style=form,explode=true,name=since"`
}

type GistsListPublicRequest struct {
	QueryParams GistsListPublicQueryParams
}

type GistsListPublicResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BaseGists       []shared.BaseGist
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
