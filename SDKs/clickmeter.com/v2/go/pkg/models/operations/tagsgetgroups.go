package operations

import (
"openapi/pkg/models/shared")

type TagsGetGroupsPathParams struct {
    TagID int64 `pathParam:"style=simple,explode=false,name=tagId"`
    
}


type TagsGetGroupsStatusEnum string

const (
    TagsGetGroupsStatusEnumDeleted TagsGetGroupsStatusEnum = "deleted"
TagsGetGroupsStatusEnumActive TagsGetGroupsStatusEnum = "active"
)


type TagsGetGroupsQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Status *TagsGetGroupsStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    
}

type TagsGetGroupsRequest struct {
    PathParams TagsGetGroupsPathParams 
    QueryParams TagsGetGroupsQueryParams 
    
}

type TagsGetGroupsResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

