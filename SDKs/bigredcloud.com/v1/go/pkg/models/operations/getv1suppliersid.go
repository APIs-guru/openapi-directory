package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1SuppliersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV1SuppliersIDQueryParams struct {
	NeedBalance *bool `queryParam:"style=form,explode=true,name=needBalance"`
}

type GetV1SuppliersIDRequest struct {
	PathParams  GetV1SuppliersIDPathParams
	QueryParams GetV1SuppliersIDQueryParams
}

type GetV1SuppliersIDResponse struct {
	ContentType string
	StatusCode  int64
	SupplierDto *shared.SupplierDto
}
