package operations

import (
"openapi/pkg/models/shared")


type GetMirroredVideosTargetEnum string

const (
    GetMirroredVideosTargetEnumMyVideos GetMirroredVideosTargetEnum = "my-videos"
GetMirroredVideosTargetEnumRemoteVideos GetMirroredVideosTargetEnum = "remote-videos"
)


type GetMirroredVideosQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *shared.VideoRedundanciesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    Target GetMirroredVideosTargetEnum `queryParam:"style=form,explode=true,name=target"`
    
}

type GetMirroredVideosSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetMirroredVideosRequest struct {
    QueryParams GetMirroredVideosQueryParams 
    Security GetMirroredVideosSecurity 
    
}

type GetMirroredVideosResponse struct {
    ContentType string 
    StatusCode int64 
    VideoRedundancies []interface{} 
    
}

