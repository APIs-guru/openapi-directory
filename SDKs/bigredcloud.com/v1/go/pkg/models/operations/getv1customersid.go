package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1CustomersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV1CustomersIDQueryParams struct {
	NeedBalance *bool `queryParam:"style=form,explode=true,name=needBalance"`
}

type GetV1CustomersIDRequest struct {
	PathParams  GetV1CustomersIDPathParams
	QueryParams GetV1CustomersIDQueryParams
}

type GetV1CustomersIDResponse struct {
	ContentType string
	CustomerDto *shared.CustomerDto
	StatusCode  int64
}
