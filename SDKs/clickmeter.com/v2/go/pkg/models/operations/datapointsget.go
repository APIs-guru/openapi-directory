package operations

import (
"openapi/pkg/models/shared")


type DataPointsGetSortDirectionEnum string

const (
    DataPointsGetSortDirectionEnumAsc DataPointsGetSortDirectionEnum = "asc"
DataPointsGetSortDirectionEnumDesc DataPointsGetSortDirectionEnum = "desc"
)



type DataPointsGetStatusEnum string

const (
    DataPointsGetStatusEnumDeleted DataPointsGetStatusEnum = "deleted"
DataPointsGetStatusEnumActive DataPointsGetStatusEnum = "active"
DataPointsGetStatusEnumPaused DataPointsGetStatusEnum = "paused"
DataPointsGetStatusEnumSpam DataPointsGetStatusEnum = "spam"
)



type DataPointsGetTypeEnum string

const (
    DataPointsGetTypeEnumTp DataPointsGetTypeEnum = "tp"
DataPointsGetTypeEnumTl DataPointsGetTypeEnum = "tl"
)


type DataPointsGetQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OnlyFavorites *bool `queryParam:"style=form,explode=true,name=onlyFavorites"`
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortDirection *DataPointsGetSortDirectionEnum `queryParam:"style=form,explode=true,name=sortDirection"`
    Status *DataPointsGetStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *DataPointsGetTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type DataPointsGetRequest struct {
    QueryParams DataPointsGetQueryParams 
    
}

type DataPointsGetResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

