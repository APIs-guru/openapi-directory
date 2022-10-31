package operations

import (
"openapi/pkg/models/shared")


type GroupsGetStatusEnum string

const (
    GroupsGetStatusEnumDeleted GroupsGetStatusEnum = "deleted"
GroupsGetStatusEnumActive GroupsGetStatusEnum = "active"
)


type GroupsGetQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Status *GroupsGetStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Write *bool `queryParam:"style=form,explode=true,name=write"`
    
}

type GroupsGetRequest struct {
    QueryParams GroupsGetQueryParams 
    
}

type GroupsGetResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

