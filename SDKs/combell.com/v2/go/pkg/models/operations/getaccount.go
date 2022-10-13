package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountQueryParams struct {
	AccountID int32 `queryParam:"style=form,explode=true,name=account_id"`
}

type GetAccountRequest struct {
	PathParams  GetAccountPathParams
	QueryParams GetAccountQueryParams
}

type GetAccountResponse struct {
	AccountDetail *shared.AccountDetail
	ContentType   string
	StatusCode    int64
}
