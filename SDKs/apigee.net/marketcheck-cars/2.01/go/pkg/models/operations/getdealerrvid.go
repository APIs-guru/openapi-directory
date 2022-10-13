package operations

import (
	"openapi/pkg/models/shared"
)

type GetDealerRvIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDealerRvIDQueryParams struct {
	APIKey   *string `queryParam:"style=form,explode=true,name=api_key"`
	Provider *bool   `queryParam:"style=form,explode=true,name=provider"`
}

type GetDealerRvIDRequest struct {
	PathParams  GetDealerRvIDPathParams
	QueryParams GetDealerRvIDQueryParams
}

type GetDealerRvIDResponse struct {
	ContentType string
	Dealer      *shared.Dealer
	Error       *shared.Error
	StatusCode  int64
}
