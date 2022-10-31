package operations

import (
"openapi/pkg/models/shared")

type GetAnonNextPlaybackItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}


type GetAnonNextPlaybackItemExpandEnum string

const (
    GetAnonNextPlaybackItemExpandEnumParent GetAnonNextPlaybackItemExpandEnum = "parent"
GetAnonNextPlaybackItemExpandEnumAncestors GetAnonNextPlaybackItemExpandEnum = "ancestors"
)


type GetAnonNextPlaybackItemQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Expand *GetAnonNextPlaybackItemExpandEnum `queryParam:"style=form,explode=true,name=expand"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    
}

type GetAnonNextPlaybackItemRequest struct {
    PathParams GetAnonNextPlaybackItemPathParams 
    QueryParams GetAnonNextPlaybackItemQueryParams 
    
}

type GetAnonNextPlaybackItemResponse struct {
    ContentType string 
    NextPlaybackItem *shared.NextPlaybackItem 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

