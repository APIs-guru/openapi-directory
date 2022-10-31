package operations

import (
"openapi/pkg/models/shared")

type TagsGetDatapointsCountPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}


type TagsGetDatapointsCountStatusEnum string

const (
    TagsGetDatapointsCountStatusEnumDeleted TagsGetDatapointsCountStatusEnum = "deleted"
TagsGetDatapointsCountStatusEnumActive TagsGetDatapointsCountStatusEnum = "active"
TagsGetDatapointsCountStatusEnumPaused TagsGetDatapointsCountStatusEnum = "paused"
TagsGetDatapointsCountStatusEnumSpam TagsGetDatapointsCountStatusEnum = "spam"
)



type TagsGetDatapointsCountTypeEnum string

const (
    TagsGetDatapointsCountTypeEnumTp TagsGetDatapointsCountTypeEnum = "tp"
TagsGetDatapointsCountTypeEnumTl TagsGetDatapointsCountTypeEnum = "tl"
)


type TagsGetDatapointsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Status *TagsGetDatapointsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *TagsGetDatapointsCountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type TagsGetDatapointsCountRequest struct {
    PathParams TagsGetDatapointsCountPathParams 
    QueryParams TagsGetDatapointsCountQueryParams 
    
}

type TagsGetDatapointsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

