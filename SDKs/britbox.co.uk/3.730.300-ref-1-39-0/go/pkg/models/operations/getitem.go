package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetItemExpandEnum string

const (
	GetItemExpandEnumAll       GetItemExpandEnum = "all"
	GetItemExpandEnumChildren  GetItemExpandEnum = "children"
	GetItemExpandEnumAncestors GetItemExpandEnum = "ancestors"
	GetItemExpandEnumParent    GetItemExpandEnum = "parent"
)

type GetItemSelectSeasonEnum string

const (
	GetItemSelectSeasonEnumFirst  GetItemSelectSeasonEnum = "first"
	GetItemSelectSeasonEnumLatest GetItemSelectSeasonEnum = "latest"
)

type GetItemQueryParams struct {
	Device       *string                   `queryParam:"style=form,explode=true,name=device"`
	Expand       *GetItemExpandEnum        `queryParam:"style=form,explode=true,name=expand"`
	Ff           []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang         *string                   `queryParam:"style=form,explode=true,name=lang"`
	MaxRating    *string                   `queryParam:"style=form,explode=true,name=max_rating"`
	Segments     []string                  `queryParam:"style=form,explode=false,name=segments"`
	SelectSeason *GetItemSelectSeasonEnum  `queryParam:"style=form,explode=true,name=select_season"`
	Sub          *string                   `queryParam:"style=form,explode=true,name=sub"`
	UseCustomID  *bool                     `queryParam:"style=form,explode=true,name=use_custom_id"`
}

type GetItemRequest struct {
	PathParams  GetItemPathParams
	QueryParams GetItemQueryParams
}

type GetItemResponse struct {
	ContentType  string
	ItemDetail   *shared.ItemDetail
	ServiceError *shared.ServiceError
	StatusCode   int64
}
