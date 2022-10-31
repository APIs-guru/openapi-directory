package operations

import (
"time"
"openapi/pkg/models/shared")


type ListSchedulesMixinEnum string

const (
    ListSchedulesMixinEnumAncestorTitles ListSchedulesMixinEnum = "ancestor_titles"
ListSchedulesMixinEnumImages ListSchedulesMixinEnum = "images"
ListSchedulesMixinEnumTitles ListSchedulesMixinEnum = "titles"
)



type ListSchedulesSortEnum string

const (
    ListSchedulesSortEnumStartDate ListSchedulesSortEnum = "start_date"
)



type ListSchedulesSortDirectionEnum string

const (
    ListSchedulesSortDirectionEnumAscending ListSchedulesSortDirectionEnum = "ascending"
ListSchedulesSortDirectionEnumDescending ListSchedulesSortDirectionEnum = "descending"
)


type ListSchedulesQueryParams struct {
    Authority []string `queryParam:"style=form,explode=true,name=authority"`
    DescendantsOf []string `queryParam:"style=form,explode=true,name=descendants_of"`
    EndFrom *time.Time `queryParam:"style=form,explode=true,name=end_from"`
    EndTo *time.Time `queryParam:"style=form,explode=true,name=end_to"`
    Format []string `queryParam:"style=form,explode=true,name=format"`
    Genre []string `queryParam:"style=form,explode=true,name=genre"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    IDType []string `queryParam:"style=form,explode=true,name=id_type"`
    Item []string `queryParam:"style=form,explode=true,name=item"`
    Mixin []ListSchedulesMixinEnum `queryParam:"style=form,explode=true,name=mixin"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerID []string `queryParam:"style=form,explode=true,name=partner_id"`
    PartnerPid []string `queryParam:"style=form,explode=true,name=partner_pid"`
    People *string `queryParam:"style=form,explode=true,name=people"`
    Pid []string `queryParam:"style=form,explode=true,name=pid"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Repeat *bool `queryParam:"style=form,explode=true,name=repeat"`
    ScheduleDay *time.Time `queryParam:"style=form,explode=true,name=schedule_day"`
    ScheduleDayFrom *time.Time `queryParam:"style=form,explode=true,name=schedule_day_from"`
    ScheduleDayTo *time.Time `queryParam:"style=form,explode=true,name=schedule_day_to"`
    ServiceMasterBrand []string `queryParam:"style=form,explode=true,name=service_master_brand"`
    Sid []string `queryParam:"style=form,explode=true,name=sid"`
    Sort *ListSchedulesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection *ListSchedulesSortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    StartFrom *time.Time `queryParam:"style=form,explode=true,name=start_from"`
    StartTo *time.Time `queryParam:"style=form,explode=true,name=start_to"`
    Version []string `queryParam:"style=form,explode=true,name=version"`
    
}

type ListSchedulesRequest struct {
    QueryParams ListSchedulesQueryParams 
    
}

type ListSchedulesResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

