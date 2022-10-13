package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersGetOpeningBalancePathParams struct {
	ItemID int64 `pathParam:"style=simple,explode=false,name=itemId"`
}

type SuppliersGetOpeningBalanceRequest struct {
	PathParams SuppliersGetOpeningBalancePathParams
}

type SuppliersGetOpeningBalanceResponse struct {
	ContentType                     string
	OwnerOpeningBalanceInPeriodsDto *shared.OwnerOpeningBalanceInPeriodsDto
	StatusCode                      int64
}
