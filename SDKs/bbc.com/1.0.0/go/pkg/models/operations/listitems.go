package operations

import (
"openapi/pkg/models/shared")


type ListItemsItemTypeEnum string

const (
    ListItemsItemTypeEnumChapter ListItemsItemTypeEnum = "chapter"
ListItemsItemTypeEnumHighlight ListItemsItemTypeEnum = "highlight"
ListItemsItemTypeEnumMusic ListItemsItemTypeEnum = "music"
ListItemsItemTypeEnumSpeech ListItemsItemTypeEnum = "speech"
ListItemsItemTypeEnumOther ListItemsItemTypeEnum = "other"
)



type ListItemsMixinEnum string

const (
    ListItemsMixinEnumContributions ListItemsMixinEnum = "contributions"
ListItemsMixinEnumImages ListItemsMixinEnum = "images"
ListItemsMixinEnumOffset ListItemsMixinEnum = "offset"
ListItemsMixinEnumPlayEvent ListItemsMixinEnum = "play_event"
)



type ListItemsSortEnum string

const (
    ListItemsSortEnumPid ListItemsSortEnum = "pid"
)



type ListItemsSortDirectionEnum string

const (
    ListItemsSortDirectionEnumDescending ListItemsSortDirectionEnum = "descending"
)


type ListItemsQueryParams struct {
    Authority *string `queryParam:"style=form,explode=true,name=authority"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    IDType *string `queryParam:"style=form,explode=true,name=id_type"`
    ItemType []ListItemsItemTypeEnum `queryParam:"style=form,explode=true,name=item_type"`
    Mixin []ListItemsMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    People *string `queryParam:"style=form,explode=true,name=people"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    Programme *string `queryParam:"style=form,explode=true,name=programme"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    SegmentEvent *string `queryParam:"style=form,explode=true,name=segment_event"`
    Sort *ListItemsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection *ListItemsSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    
}

type ListItemsRequest struct {
    QueryParams ListItemsQueryParams 
    
}

type ListItemsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

