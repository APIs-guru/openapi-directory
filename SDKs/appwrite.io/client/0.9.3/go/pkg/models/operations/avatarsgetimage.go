package operations

import (
"openapi/pkg/models/shared")

type AvatarsGetImageQueryParams struct {
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type AvatarsGetImageSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AvatarsGetImageRequest struct {
    QueryParams AvatarsGetImageQueryParams 
    Security AvatarsGetImageSecurity 
    
}

type AvatarsGetImageResponse struct {
    ContentType string 
    StatusCode int64 
    
}

