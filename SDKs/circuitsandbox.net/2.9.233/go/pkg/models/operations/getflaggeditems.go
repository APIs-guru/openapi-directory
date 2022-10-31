package operations

import (
"time"
"openapi/pkg/models/shared")


type GetFlaggedItemsSearchDirectionEnum string

const (
    GetFlaggedItemsSearchDirectionEnumBefore GetFlaggedItemsSearchDirectionEnum = "BEFORE"
GetFlaggedItemsSearchDirectionEnumAfter GetFlaggedItemsSearchDirectionEnum = "AFTER"
)


type GetFlaggedItemsQueryParams struct {
    NumberOfResults *float64 `queryParam:"style=form,explode=true,name=numberOfResults"`
    SearchDirection GetFlaggedItemsSearchDirectionEnum `queryParam:"style=form,explode=true,name=searchDirection"`
    SearchPointer *string `queryParam:"style=form,explode=true,name=searchPointer"`
    Timestamp time.Time `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type GetFlaggedItemsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetFlaggedItemsRequest struct {
    QueryParams GetFlaggedItemsQueryParams 
    Security GetFlaggedItemsSecurity 
    
}

type GetFlaggedItemsResponse struct {
    Body []byte 
    ContentType string 
    FlaggedItemsResult *interface{} 
    StatusCode int64 
    
}

