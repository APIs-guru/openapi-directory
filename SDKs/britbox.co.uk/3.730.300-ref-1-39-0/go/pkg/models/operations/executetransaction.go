package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteTransactionPathParams struct {
	Transactionid string `pathParam:"style=simple,explode=false,name=transactionid"`
}

type ExecuteTransactionQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ExecuteTransactionRequest struct {
	PathParams  ExecuteTransactionPathParams
	QueryParams ExecuteTransactionQueryParams
	Request     shared.ItvRokuTransactionRequest `request:"mediaType=application/json"`
}

type ExecuteTransactionResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
