package operations

import (
"openapi/pkg/models/shared")

type AccountGetPermissionsPathParams struct {
    GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
    
}


type AccountGetPermissionsEntityTypeEnum string

const (
    AccountGetPermissionsEntityTypeEnumDatapoint AccountGetPermissionsEntityTypeEnum = "datapoint"
AccountGetPermissionsEntityTypeEnumGroup AccountGetPermissionsEntityTypeEnum = "group"
)



type AccountGetPermissionsTypeEnum string

const (
    AccountGetPermissionsTypeEnumR AccountGetPermissionsTypeEnum = "r"
AccountGetPermissionsTypeEnumW AccountGetPermissionsTypeEnum = "w"
)


type AccountGetPermissionsQueryParams struct {
    EntityID *int64 `queryParam:"style=form,explode=true,name=entityId"`
    EntityType *AccountGetPermissionsEntityTypeEnum `queryParam:"style=form,explode=true,name=entityType"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Type *AccountGetPermissionsTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type AccountGetPermissionsRequest struct {
    PathParams AccountGetPermissionsPathParams 
    QueryParams AccountGetPermissionsQueryParams 
    
}

type AccountGetPermissionsResponse struct {
    APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant *shared.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant 
    ContentType string 
    StatusCode int64 
    
}

