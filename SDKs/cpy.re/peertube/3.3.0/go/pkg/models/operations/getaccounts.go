package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsQueryParams struct {
	Count *int64  `queryParam:"style=form,explode=true,name=count"`
	Sort  *string `queryParam:"style=form,explode=true,name=sort"`
	Start *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetAccountsRequest struct {
	QueryParams GetAccountsQueryParams
}

type GetAccountsResponse struct {
	Accounts    []shared.Account
	ContentType string
	StatusCode  int64
}
