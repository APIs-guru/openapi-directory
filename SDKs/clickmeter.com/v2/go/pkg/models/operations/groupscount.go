package operations

import (
"openapi/pkg/models/shared")


type GroupsCountStatusEnum string

const (
    GroupsCountStatusEnumDeleted GroupsCountStatusEnum = "deleted"
GroupsCountStatusEnumActive GroupsCountStatusEnum = "active"
)


type GroupsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Status *GroupsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Write *bool `queryParam:"style=form,explode=true,name=write"`
    
}

type GroupsCountRequest struct {
    QueryParams GroupsCountQueryParams 
    
}

type GroupsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

