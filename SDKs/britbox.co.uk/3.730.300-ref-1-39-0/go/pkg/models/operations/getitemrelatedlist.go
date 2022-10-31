package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemRelatedListPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetItemRelatedListQueryParams struct {
	Device    *string                   `queryParam:"style=form,explode=true,name=device"`
	Ff        []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang      *string                   `queryParam:"style=form,explode=true,name=lang"`
	MaxRating *string                   `queryParam:"style=form,explode=true,name=max_rating"`
	Page      *int32                    `queryParam:"style=form,explode=true,name=page"`
	PageSize  *int32                    `queryParam:"style=form,explode=true,name=page_size"`
	Segments  []string                  `queryParam:"style=form,explode=false,name=segments"`
	Sub       *string                   `queryParam:"style=form,explode=true,name=sub"`
}

type GetItemRelatedListRequest struct {
	PathParams  GetItemRelatedListPathParams
	QueryParams GetItemRelatedListQueryParams
}

type GetItemRelatedListResponse struct {
	ContentType  string
	ItemList     *shared.ItemList
	ServiceError *shared.ServiceError
	StatusCode   int64
}
