package operations

import (
	"openapi/pkg/models/shared"
)

type GetRatingsListOrderByEnum string

const (
	GetRatingsListOrderByEnumDateAdded    GetRatingsListOrderByEnum = "date-added"
	GetRatingsListOrderByEnumDateModified GetRatingsListOrderByEnum = "date-modified"
)

type GetRatingsListQueryParams struct {
	Device   *string                    `queryParam:"style=form,explode=true,name=device"`
	Ff       []shared.FeatureFlagsEnum  `queryParam:"style=form,explode=false,name=ff"`
	ItemType *shared.ItemTypeEnum       `queryParam:"style=form,explode=true,name=item_type"`
	Lang     *string                    `queryParam:"style=form,explode=true,name=lang"`
	Order    *shared.ListOrderEnum      `queryParam:"style=form,explode=true,name=order"`
	OrderBy  *GetRatingsListOrderByEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page     *int32                     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                     `queryParam:"style=form,explode=true,name=page_size"`
	Segments []string                   `queryParam:"style=form,explode=false,name=segments"`
	Sub      *string                    `queryParam:"style=form,explode=true,name=sub"`
}

type GetRatingsListSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type GetRatingsListRequest struct {
	QueryParams GetRatingsListQueryParams
	Security    GetRatingsListSecurity
}

type GetRatingsListResponse struct {
	ContentType  string
	ItemList     *shared.ItemList
	ServiceError *shared.ServiceError
	StatusCode   int64
}
