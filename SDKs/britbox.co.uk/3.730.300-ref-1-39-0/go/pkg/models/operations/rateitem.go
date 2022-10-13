package operations

import (
	"openapi/pkg/models/shared"
)

type RateItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type RateItemQueryParams struct {
	Ff     []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang   *string                   `queryParam:"style=form,explode=true,name=lang"`
	Rating int32                     `queryParam:"style=form,explode=true,name=rating"`
}

type RateItemSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type RateItemRequest struct {
	PathParams  RateItemPathParams
	QueryParams RateItemQueryParams
	Security    RateItemSecurity
}

type RateItemResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
	UserRating   *shared.UserRating
}
