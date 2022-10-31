package operations

import (
"openapi/pkg/models/shared")

type PutVideosIDRatePathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}


type PutVideosIDRateRequestBodyRatingEnum string

const (
    PutVideosIDRateRequestBodyRatingEnumLike PutVideosIDRateRequestBodyRatingEnum = "like"
PutVideosIDRateRequestBodyRatingEnumDislike PutVideosIDRateRequestBodyRatingEnum = "dislike"
)


type PutVideosIDRateRequestBody struct {
    Rating PutVideosIDRateRequestBodyRatingEnum `json:"rating"`
    
}

type PutVideosIDRateSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutVideosIDRateRequest struct {
    PathParams PutVideosIDRatePathParams 
    Request *PutVideosIDRateRequestBody `request:"mediaType=application/json"`
    Security PutVideosIDRateSecurity 
    
}

type PutVideosIDRateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

