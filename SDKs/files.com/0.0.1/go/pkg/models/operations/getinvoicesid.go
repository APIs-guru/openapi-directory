package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoicesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetInvoicesIDRequest struct {
	PathParams GetInvoicesIDPathParams
}

type GetInvoicesIDResponse struct {
	AccountLineItemEntity *shared.AccountLineItemEntity
	ContentType           string
	StatusCode            int64
}
