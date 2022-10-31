package operations

import (
"openapi/pkg/models/shared")

type GroupsGetDatapointsCountPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type GroupsGetDatapointsCountStatusEnum string

const (
    GroupsGetDatapointsCountStatusEnumDeleted GroupsGetDatapointsCountStatusEnum = "deleted"
GroupsGetDatapointsCountStatusEnumActive GroupsGetDatapointsCountStatusEnum = "active"
GroupsGetDatapointsCountStatusEnumPaused GroupsGetDatapointsCountStatusEnum = "paused"
GroupsGetDatapointsCountStatusEnumSpam GroupsGetDatapointsCountStatusEnum = "spam"
)



type GroupsGetDatapointsCountTypeEnum string

const (
    GroupsGetDatapointsCountTypeEnumTp GroupsGetDatapointsCountTypeEnum = "tp"
GroupsGetDatapointsCountTypeEnumTl GroupsGetDatapointsCountTypeEnum = "tl"
)


type GroupsGetDatapointsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    OnlyFavorites *bool `queryParam:"style=form,explode=true,name=onlyFavorites"`
    Status *GroupsGetDatapointsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *GroupsGetDatapointsCountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GroupsGetDatapointsCountRequest struct {
    PathParams GroupsGetDatapointsCountPathParams 
    QueryParams GroupsGetDatapointsCountQueryParams 
    
}

type GroupsGetDatapointsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

