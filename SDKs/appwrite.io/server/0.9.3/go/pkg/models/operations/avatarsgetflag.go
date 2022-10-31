package operations

import (
"openapi/pkg/models/shared")

type AvatarsGetFlagPathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    
}

type AvatarsGetFlagQueryParams struct {
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    Quality *int32 `queryParam:"style=form,explode=true,name=quality"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type AvatarsGetFlagSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AvatarsGetFlagRequest struct {
    PathParams AvatarsGetFlagPathParams 
    QueryParams AvatarsGetFlagQueryParams 
    Security AvatarsGetFlagSecurity 
    
}

type AvatarsGetFlagResponse struct {
    ContentType string 
    StatusCode int64 
    
}

