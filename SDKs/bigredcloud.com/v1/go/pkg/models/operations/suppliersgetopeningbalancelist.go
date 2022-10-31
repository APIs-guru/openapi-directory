package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersGetOpeningBalanceListPathParams struct {
	ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
}

type SuppliersGetOpeningBalanceListRequest struct {
	PathParams SuppliersGetOpeningBalanceListPathParams
}

type SuppliersGetOpeningBalanceListResponse struct {
	ContentType             string
	OwnerOpeningBalanceDtos []shared.OwnerOpeningBalanceDto
	StatusCode              int64
}
