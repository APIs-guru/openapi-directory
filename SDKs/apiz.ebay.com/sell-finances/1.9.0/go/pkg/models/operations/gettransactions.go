package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTransactionsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
	Security    GetTransactionsSecurity
}

type GetTransactionsResponse struct {
	ContentType  string
	StatusCode   int64
	Transactions *shared.Transactions
}
