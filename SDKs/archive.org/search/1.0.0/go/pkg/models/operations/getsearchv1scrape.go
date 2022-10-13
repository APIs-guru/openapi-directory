package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchV1ScrapeQueryParams struct {
	Callback  *string `queryParam:"style=form,explode=true,name=callback"`
	Cursor    *string `queryParam:"style=form,explode=true,name=cursor"`
	Field     *string `queryParam:"style=form,explode=true,name=field"`
	Q         *string `queryParam:"style=form,explode=true,name=q"`
	Size      *int64  `queryParam:"style=form,explode=true,name=size"`
	Sort      *string `queryParam:"style=form,explode=true,name=sort"`
	TotalOnly *bool   `queryParam:"style=form,explode=true,name=total_only"`
}

type GetSearchV1ScrapeRequest struct {
	QueryParams GetSearchV1ScrapeQueryParams
}

type GetSearchV1ScrapeResponse struct {
	Body         []byte
	ContentType  string
	Error        *interface{}
	ScrapeResult *shared.ScrapeResult
	StatusCode   int64
}
