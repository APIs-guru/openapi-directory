package operations

import (
	"openapi/pkg/models/shared"
)

type GetItvPageItemDetailExpandEnum string

const (
	GetItvPageItemDetailExpandEnumAll       GetItvPageItemDetailExpandEnum = "all"
	GetItvPageItemDetailExpandEnumChildren  GetItvPageItemDetailExpandEnum = "children"
	GetItvPageItemDetailExpandEnumAncestors GetItvPageItemDetailExpandEnum = "ancestors"
)

type GetItvPageItemDetailSelectSeasonEnum string

const (
	GetItvPageItemDetailSelectSeasonEnumFirst  GetItvPageItemDetailSelectSeasonEnum = "first"
	GetItvPageItemDetailSelectSeasonEnumLatest GetItvPageItemDetailSelectSeasonEnum = "latest"
)

type GetItvPageTextEntryFormatEnum string

const (
	GetItvPageTextEntryFormatEnumMarkdown GetItvPageTextEntryFormatEnum = "markdown"
	GetItvPageTextEntryFormatEnumHTML     GetItvPageTextEntryFormatEnum = "html"
)

type GetItvPageQueryParams struct {
	Device                 *string                               `queryParam:"style=form,explode=true,name=device"`
	Ff                     []shared.FeatureFlagsEnum             `queryParam:"style=form,explode=false,name=ff"`
	ItemDetailExpand       *GetItvPageItemDetailExpandEnum       `queryParam:"style=form,explode=true,name=item_detail_expand"`
	ItemDetailSelectSeason *GetItvPageItemDetailSelectSeasonEnum `queryParam:"style=form,explode=true,name=item_detail_select_season"`
	Lang                   *string                               `queryParam:"style=form,explode=true,name=lang"`
	ListPageSize           *int32                                `queryParam:"style=form,explode=true,name=list_page_size"`
	ListPageSizeLarge      *int32                                `queryParam:"style=form,explode=true,name=list_page_size_large"`
	MaxListPrefetch        *int32                                `queryParam:"style=form,explode=true,name=max_list_prefetch"`
	MaxRating              *string                               `queryParam:"style=form,explode=true,name=max_rating"`
	Path                   string                                `queryParam:"style=form,explode=true,name=path"`
	Segments               []string                              `queryParam:"style=form,explode=false,name=segments"`
	Sub                    *string                               `queryParam:"style=form,explode=true,name=sub"`
	TextEntryFormat        *GetItvPageTextEntryFormatEnum        `queryParam:"style=form,explode=true,name=text_entry_format"`
}

type GetItvPageRequest struct {
	QueryParams GetItvPageQueryParams
}

type GetItvPageResponse struct {
	ContentType  string
	Page         *shared.Page
	ServiceError *shared.ServiceError
	StatusCode   int64
}
