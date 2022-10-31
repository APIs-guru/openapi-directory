package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchV1OrganicQueryParams struct {
	Callback  *string `queryParam:"style=form,explode=true,name=callback"`
	Field     *string `queryParam:"style=form,explode=true,name=field"`
	Q         *string `queryParam:"style=form,explode=true,name=q"`
	Size      *int64  `queryParam:"style=form,explode=true,name=size"`
	TotalOnly *bool   `queryParam:"style=form,explode=true,name=total_only"`
}

type GetSearchV1OrganicRequest struct {
	QueryParams GetSearchV1OrganicQueryParams
}

type GetSearchV1OrganicResponse struct {
	Body          []byte
	ContentType   string
	Error         *interface{}
	OrganicResult *shared.OrganicResult
	StatusCode    int64
}
