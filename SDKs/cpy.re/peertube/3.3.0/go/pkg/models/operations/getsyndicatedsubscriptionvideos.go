package operations

import (
"openapi/pkg/models/shared")


type GetSyndicatedSubscriptionVideosFormatEnum string

const (
    GetSyndicatedSubscriptionVideosFormatEnumXML GetSyndicatedSubscriptionVideosFormatEnum = "xml"
GetSyndicatedSubscriptionVideosFormatEnumRss GetSyndicatedSubscriptionVideosFormatEnum = "rss"
GetSyndicatedSubscriptionVideosFormatEnumRss2 GetSyndicatedSubscriptionVideosFormatEnum = "rss2"
GetSyndicatedSubscriptionVideosFormatEnumAtom GetSyndicatedSubscriptionVideosFormatEnum = "atom"
GetSyndicatedSubscriptionVideosFormatEnumAtom1 GetSyndicatedSubscriptionVideosFormatEnum = "atom1"
GetSyndicatedSubscriptionVideosFormatEnumJSON GetSyndicatedSubscriptionVideosFormatEnum = "json"
GetSyndicatedSubscriptionVideosFormatEnumJson1 GetSyndicatedSubscriptionVideosFormatEnum = "json1"
)


type GetSyndicatedSubscriptionVideosPathParams struct {
    Format GetSyndicatedSubscriptionVideosFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetSyndicatedSubscriptionVideosQueryParams struct {
    AccountID string `queryParam:"style=form,explode=true,name=accountId"`
    Filter *shared.FilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Nsfw *shared.NsfwEnum `queryParam:"style=form,explode=true,name=nsfw"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetSyndicatedSubscriptionVideosRequest struct {
    PathParams GetSyndicatedSubscriptionVideosPathParams 
    QueryParams GetSyndicatedSubscriptionVideosQueryParams 
    
}

type GetSyndicatedSubscriptionVideosResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetSyndicatedSubscriptionVideos204ApplicationJSONObject map[string]interface{} 
    
}

