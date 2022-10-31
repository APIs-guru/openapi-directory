package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealerMotorcycleIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDealerMotorcycleIDQueryParams struct {
	APIKey   *string `queryParam:"style=form,explode=true,name=api_key"`
	Provider *bool   `queryParam:"style=form,explode=true,name=provider"`
}

type GetDealerMotorcycleIDRequest struct {
	PathParams  GetDealerMotorcycleIDPathParams
	QueryParams GetDealerMotorcycleIDQueryParams
}

type GetDealerMotorcycleIDResponse struct {
	ContentType string
	Dealer      *shared.Dealer
	Error       *shared.Error
	StatusCode  int64
}
