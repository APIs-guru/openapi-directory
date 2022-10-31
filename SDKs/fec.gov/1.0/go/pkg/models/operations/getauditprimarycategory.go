package operations

import (
"openapi/pkg/models/shared")

type GetAuditPrimaryCategoryQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    PrimaryCategoryID []string `queryParam:"style=form,explode=true,name=primary_category_id"`
    PrimaryCategoryName []string `queryParam:"style=form,explode=true,name=primary_category_name"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    SortHideNull *bool `queryParam:"style=form,explode=true,name=sort_hide_null"`
    SortNullOnly *bool `queryParam:"style=form,explode=true,name=sort_null_only"`
    SortNullsLast *bool `queryParam:"style=form,explode=true,name=sort_nulls_last"`
    
}

type GetAuditPrimaryCategoryRequest struct {
    QueryParams GetAuditPrimaryCategoryQueryParams 
    
}

type GetAuditPrimaryCategoryResponse struct {
    AuditPrimaryCategoryPage *shared.AuditPrimaryCategoryPage 
    ContentType string 
    StatusCode int64 
    
}

