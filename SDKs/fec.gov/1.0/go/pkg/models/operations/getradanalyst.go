package operations

import (
"time"
"openapi/pkg/models/shared")

type GetRadAnalystQueryParams struct {
    AnalystID []int32 `queryParam:"style=form,explode=true,name=analyst_id"`
    AnalystShortID []int32 `queryParam:"style=form,explode=true,name=analyst_short_id"`
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    CommitteeID []string `queryParam:"style=form,explode=true,name=committee_id"`
    Email []string `queryParam:"style=form,explode=true,name=email"`
    MaxAssignmentUpdateDate *time.Time `queryParam:"style=form,explode=true,name=max_assignment_update_date"`
    MinAssignmentUpdateDate *time.Time `queryParam:"style=form,explode=true,name=min_assignment_update_date"`
    Name []string `queryParam:"style=form,explode=true,name=name"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    TelephoneExt []int32 `queryParam:"style=form,explode=true,name=telephone_ext"`
    Title []string `queryParam:"style=form,explode=true,name=title"`
    
}

type GetRadAnalystRequest struct {
    QueryParams GetRadAnalystQueryParams 
    
}

type GetRadAnalystResponse struct {
    ContentType string 
    RadAnalystPage *shared.RadAnalystPage 
    StatusCode int64 
    
}

