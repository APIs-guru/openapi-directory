package operations

import (
"time"
"openapi/pkg/models/shared")


type ListBroadcastsMixinEnum string

const (
    ListBroadcastsMixinEnumTitles ListBroadcastsMixinEnum = "titles"
)



type ListBroadcastsSortEnum string

const (
    ListBroadcastsSortEnumStartDate ListBroadcastsSortEnum = "start_date"
)



type ListBroadcastsSortDirectionEnum string

const (
    ListBroadcastsSortDirectionEnumAscending ListBroadcastsSortDirectionEnum = "ascending"
ListBroadcastsSortDirectionEnumDescending ListBroadcastsSortDirectionEnum = "descending"
)


type ListBroadcastsQueryParams struct {
    Authority []string `queryParam:"style=form,explode=true,name=authority"`
    DescendantsOf []string `queryParam:"style=form,explode=true,name=descendants_of"`
    EndFrom *time.Time `queryParam:"style=form,explode=true,name=end_from"`
    EndTo *time.Time `queryParam:"style=form,explode=true,name=end_to"`
    Format []string `queryParam:"style=form,explode=true,name=format"`
    Genre []string `queryParam:"style=form,explode=true,name=genre"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    Item []string `queryParam:"style=form,explode=true,name=item"`
    Mixin []ListBroadcastsMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    People *string `queryParam:"style=form,explode=true,name=people"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    ScheduleDay *time.Time `queryParam:"style=form,explode=true,name=schedule_day"`
    ScheduleDayFrom *time.Time `queryParam:"style=form,explode=true,name=schedule_day_from"`
    ScheduleDayTo *time.Time `queryParam:"style=form,explode=true,name=schedule_day_to"`
    ServiceMasterBrand []string `queryParam:"style=form,explode=true,name=service_master_brand"`
    Sid []string `queryParam:"style=form,explode=true,name=sid"`
    Sort *ListBroadcastsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection *ListBroadcastsSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    StartFrom *time.Time `queryParam:"style=form,explode=true,name=start_from"`
    StartTo *time.Time `queryParam:"style=form,explode=true,name=start_to"`
    Version []string `queryParam:"style=form,explode=true,name=version"`
    
}

type ListBroadcastsRequest struct {
    QueryParams ListBroadcastsQueryParams 
    
}

type ListBroadcastsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

