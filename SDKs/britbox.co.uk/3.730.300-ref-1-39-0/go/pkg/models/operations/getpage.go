package operations

import (
"openapi/pkg/models/shared")


type GetPageItemDetailExpandEnum string

const (
    GetPageItemDetailExpandEnumAll GetPageItemDetailExpandEnum = "all"
GetPageItemDetailExpandEnumChildren GetPageItemDetailExpandEnum = "children"
GetPageItemDetailExpandEnumAncestors GetPageItemDetailExpandEnum = "ancestors"
)



type GetPageItemDetailSelectSeasonEnum string

const (
    GetPageItemDetailSelectSeasonEnumFirst GetPageItemDetailSelectSeasonEnum = "first"
GetPageItemDetailSelectSeasonEnumLatest GetPageItemDetailSelectSeasonEnum = "latest"
)



type GetPageTextEntryFormatEnum string

const (
    GetPageTextEntryFormatEnumMarkdown GetPageTextEntryFormatEnum = "markdown"
GetPageTextEntryFormatEnumHTML GetPageTextEntryFormatEnum = "html"
)


type GetPageQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    ItemDetailExpand *GetPageItemDetailExpandEnum `queryParam:"style=form,explode=true,name=item_detail_expand"`
    ItemDetailSelectSeason *GetPageItemDetailSelectSeasonEnum `queryParam:"style=form,explode=true,name=item_detail_select_season"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    ListPageSize *int32 `queryParam:"style=form,explode=true,name=list_page_size"`
    ListPageSizeLarge *int32 `queryParam:"style=form,explode=true,name=list_page_size_large"`
    MaxListPrefetch *int32 `queryParam:"style=form,explode=true,name=max_list_prefetch"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    Path string `queryParam:"style=form,explode=true,name=path"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    TextEntryFormat *GetPageTextEntryFormatEnum `queryParam:"style=form,explode=true,name=text_entry_format"`
    
}

type GetPageRequest struct {
    QueryParams GetPageQueryParams 
    
}

type GetPageResponse struct {
    ContentType string 
    Page *shared.Page 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

