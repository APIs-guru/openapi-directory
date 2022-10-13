package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GistsListForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GistsListForUserQueryParams struct {
	Page    *int64     `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64     `queryParam:"style=form,explode=true,name=per_page"`
	Since   *time.Time `queryParam:"style=form,explode=true,name=since"`
}

type GistsListForUserRequest struct {
	PathParams  GistsListForUserPathParams
	QueryParams GistsListForUserQueryParams
}

type GistsListForUserResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BaseGists       []shared.BaseGist
	ValidationError *shared.ValidationError
}
