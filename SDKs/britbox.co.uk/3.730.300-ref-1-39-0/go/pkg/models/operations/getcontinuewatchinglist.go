package operations

import (
"openapi/pkg/models/shared")


type GetContinueWatchingListIncludeEnum string

const (
    GetContinueWatchingListIncludeEnumEpisode GetContinueWatchingListIncludeEnum = "episode"
GetContinueWatchingListIncludeEnumSeason GetContinueWatchingListIncludeEnum = "season"
GetContinueWatchingListIncludeEnumShow GetContinueWatchingListIncludeEnum = "show"
)



type GetContinueWatchingListShowItemTypeEnum string

const (
    GetContinueWatchingListShowItemTypeEnumEpisode GetContinueWatchingListShowItemTypeEnum = "episode"
GetContinueWatchingListShowItemTypeEnumSeason GetContinueWatchingListShowItemTypeEnum = "season"
GetContinueWatchingListShowItemTypeEnumShow GetContinueWatchingListShowItemTypeEnum = "show"
)


type GetContinueWatchingListQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Include []GetContinueWatchingListIncludeEnum `queryParam:"style=form,explode=false,name=include"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    ShowItemType *GetContinueWatchingListShowItemTypeEnum `queryParam:"style=form,explode=true,name=show_item_type"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetContinueWatchingListSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetContinueWatchingListRequest struct {
    QueryParams GetContinueWatchingListQueryParams 
    Security GetContinueWatchingListSecurity 
    
}

type GetContinueWatchingListResponse struct {
    ContentType string 
    ItemList *shared.ItemList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

