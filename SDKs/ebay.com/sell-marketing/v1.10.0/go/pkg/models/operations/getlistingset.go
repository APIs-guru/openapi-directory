package operations

import (
	"openapi/pkg/models/shared"
)

type GetListingSetPathParams struct {
	PromotionID string `pathParam:"style=simple,explode=false,name=promotion_id"`
}

type GetListingSetQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
	Q      *string `queryParam:"style=form,explode=true,name=q"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
	Status *string `queryParam:"style=form,explode=true,name=status"`
}

type GetListingSetSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetListingSetRequest struct {
	PathParams  GetListingSetPathParams
	QueryParams GetListingSetQueryParams
	Security    GetListingSetSecurity
}

type GetListingSetResponse struct {
	ContentType string
	StatusCode  int64
}
