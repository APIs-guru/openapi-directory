package operations

import (
	"openapi/pkg/models/shared"
)

type StromkontoChoicesQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type StromkontoChoicesRequest struct {
	QueryParams StromkontoChoicesQueryParams
}

type StromkontoChoicesResponse struct {
	Balances    []shared.Balance
	ContentType string
	StatusCode  int64
}
