package operations

import (
	"openapi/pkg/models/shared"
)

type StromkontoBalancesQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type StromkontoBalancesRequest struct {
	QueryParams StromkontoBalancesQueryParams
}

type StromkontoBalancesResponse struct {
	Balances    []shared.Balance
	ContentType string
	StatusCode  int64
}
