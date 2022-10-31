package operations

import (
"openapi/pkg/models/shared")

type GetUsersMeVideosQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetUsersMeVideosSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetUsersMeVideosRequest struct {
    QueryParams GetUsersMeVideosQueryParams 
    Security GetUsersMeVideosSecurity 
    
}

type GetUsersMeVideosResponse struct {
    ContentType string 
    StatusCode int64 
    VideoListResponse *interface{} 
    
}

