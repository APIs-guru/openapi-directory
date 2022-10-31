package operations

import (
"openapi/pkg/models/shared")


type GetSyndicatedVideosFormatEnum string

const (
    GetSyndicatedVideosFormatEnumXML GetSyndicatedVideosFormatEnum = "xml"
GetSyndicatedVideosFormatEnumRss GetSyndicatedVideosFormatEnum = "rss"
GetSyndicatedVideosFormatEnumRss2 GetSyndicatedVideosFormatEnum = "rss2"
GetSyndicatedVideosFormatEnumAtom GetSyndicatedVideosFormatEnum = "atom"
GetSyndicatedVideosFormatEnumAtom1 GetSyndicatedVideosFormatEnum = "atom1"
GetSyndicatedVideosFormatEnumJSON GetSyndicatedVideosFormatEnum = "json"
GetSyndicatedVideosFormatEnumJson1 GetSyndicatedVideosFormatEnum = "json1"
)


type GetSyndicatedVideosPathParams struct {
    Format GetSyndicatedVideosFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type GetSyndicatedVideosQueryParams struct {
    AccountID *string `queryParam:"style=form,explode=true,name=accountId"`
    AccountName *string `queryParam:"style=form,explode=true,name=accountName"`
    Filter *shared.FilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Nsfw *shared.NsfwEnum `queryParam:"style=form,explode=true,name=nsfw"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    VideoChannelID *string `queryParam:"style=form,explode=true,name=videoChannelId"`
    VideoChannelName *string `queryParam:"style=form,explode=true,name=videoChannelName"`
    
}

type GetSyndicatedVideosRequest struct {
    PathParams GetSyndicatedVideosPathParams 
    QueryParams GetSyndicatedVideosQueryParams 
    
}

type GetSyndicatedVideosResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetSyndicatedVideos204ApplicationJSONObject map[string]interface{} 
    
}

