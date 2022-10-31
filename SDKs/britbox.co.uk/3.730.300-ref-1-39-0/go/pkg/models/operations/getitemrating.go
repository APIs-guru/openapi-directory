package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemRatingPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetItemRatingQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetItemRatingSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type GetItemRatingRequest struct {
	PathParams  GetItemRatingPathParams
	QueryParams GetItemRatingQueryParams
	Security    GetItemRatingSecurity
}

type GetItemRatingResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
	UserRating   *shared.UserRating
}
