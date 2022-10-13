package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersGetOpeningBalanceListPathParams struct {
	ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
}

type CustomersGetOpeningBalanceListRequest struct {
	PathParams CustomersGetOpeningBalanceListPathParams
}

type CustomersGetOpeningBalanceListResponse struct {
	ContentType             string
	OwnerOpeningBalanceDtos []shared.OwnerOpeningBalanceDto
	StatusCode              int64
}
