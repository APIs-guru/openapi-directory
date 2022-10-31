package operations

import (
"openapi/pkg/models/shared")

type TagsGetDatapointsPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}


type TagsGetDatapointsStatusEnum string

const (
    TagsGetDatapointsStatusEnumDeleted TagsGetDatapointsStatusEnum = "deleted"
TagsGetDatapointsStatusEnumActive TagsGetDatapointsStatusEnum = "active"
TagsGetDatapointsStatusEnumPaused TagsGetDatapointsStatusEnum = "paused"
TagsGetDatapointsStatusEnumSpam TagsGetDatapointsStatusEnum = "spam"
)



type TagsGetDatapointsTypeEnum string

const (
    TagsGetDatapointsTypeEnumTp TagsGetDatapointsTypeEnum = "tp"
TagsGetDatapointsTypeEnumTl TagsGetDatapointsTypeEnum = "tl"
)


type TagsGetDatapointsQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Status *TagsGetDatapointsStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *TagsGetDatapointsTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type TagsGetDatapointsRequest struct {
    PathParams TagsGetDatapointsPathParams 
    QueryParams TagsGetDatapointsQueryParams 
    
}

type TagsGetDatapointsResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

