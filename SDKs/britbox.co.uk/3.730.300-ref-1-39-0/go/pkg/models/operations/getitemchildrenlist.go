package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemChildrenListPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetItemChildrenListQueryParams struct {
	Device    *string                   `queryParam:"style=form,explode=true,name=device"`
	Ff        []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang      *string                   `queryParam:"style=form,explode=true,name=lang"`
	MaxRating *string                   `queryParam:"style=form,explode=true,name=max_rating"`
	Order     *shared.ListOrderEnum     `queryParam:"style=form,explode=true,name=order"`
	Page      *int32                    `queryParam:"style=form,explode=true,name=page"`
	PageSize  *int32                    `queryParam:"style=form,explode=true,name=page_size"`
	Segments  []string                  `queryParam:"style=form,explode=false,name=segments"`
	Sub       *string                   `queryParam:"style=form,explode=true,name=sub"`
}

type GetItemChildrenListRequest struct {
	PathParams  GetItemChildrenListPathParams
	QueryParams GetItemChildrenListQueryParams
}

type GetItemChildrenListResponse struct {
	ContentType  string
	ItemList     *shared.ItemList
	ServiceError *shared.ServiceError
	StatusCode   int64
}
