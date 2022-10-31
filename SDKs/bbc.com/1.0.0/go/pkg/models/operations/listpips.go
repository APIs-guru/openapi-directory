package operations

import (
	"openapi/pkg/models/shared"
)

type ListPipsQueryParams struct {
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Q        *string `queryParam:"style=form,explode=true,name=q"`
}

type ListPipsRequest struct {
	QueryParams ListPipsQueryParams
}

type ListPipsResponse struct {
	Body        []byte
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Nitro       *interface{}
}
