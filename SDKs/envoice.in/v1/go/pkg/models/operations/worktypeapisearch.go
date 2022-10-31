package operations

import (
"openapi/pkg/models/shared")


type WorkTypeAPISearchQueryOptionsOrderEnum string

const (
    WorkTypeAPISearchQueryOptionsOrderEnumNone WorkTypeAPISearchQueryOptionsOrderEnum = "None"
WorkTypeAPISearchQueryOptionsOrderEnumAsc WorkTypeAPISearchQueryOptionsOrderEnum = "Asc"
WorkTypeAPISearchQueryOptionsOrderEnumDesc WorkTypeAPISearchQueryOptionsOrderEnum = "Desc"
)


type WorkTypeAPISearchQueryParams struct {
    QueryOptionsOrder *WorkTypeAPISearchQueryOptionsOrderEnum `queryParam:"style=form,explode=true,name=queryOptions.order"`
    QueryOptionsOrderBy *string `queryParam:"style=form,explode=true,name=queryOptions.orderBy"`
    QueryOptionsPage *int32 `queryParam:"style=form,explode=true,name=queryOptions.page"`
    QueryOptionsPageSize *int32 `queryParam:"style=form,explode=true,name=queryOptions.pageSize"`
    QueryOptionsQuery *string `queryParam:"style=form,explode=true,name=queryOptions.query"`
    
}

type WorkTypeAPISearchHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type WorkTypeAPISearchRequest struct {
    QueryParams WorkTypeAPISearchQueryParams 
    Headers WorkTypeAPISearchHeaders 
    
}

type WorkTypeAPISearchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    WorkTypeDetailsAPIModels []shared.WorkTypeDetailsAPIModel 
    
}

