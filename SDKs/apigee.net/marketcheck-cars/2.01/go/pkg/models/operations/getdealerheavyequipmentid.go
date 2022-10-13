package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealerHeavyEquipmentIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDealerHeavyEquipmentIDQueryParams struct {
	APIKey   *string `queryParam:"style=form,explode=true,name=api_key"`
	Provider *bool   `queryParam:"style=form,explode=true,name=provider"`
}

type GetDealerHeavyEquipmentIDRequest struct {
	PathParams  GetDealerHeavyEquipmentIDPathParams
	QueryParams GetDealerHeavyEquipmentIDQueryParams
}

type GetDealerHeavyEquipmentIDResponse struct {
	ContentType string
	Dealer      *shared.Dealer
	Error       *shared.Error
	StatusCode  int64
}
