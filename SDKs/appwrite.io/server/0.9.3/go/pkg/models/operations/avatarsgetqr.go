package operations

import (
"openapi/pkg/models/shared")

type AvatarsGetQrQueryParams struct {
    Download *bool `queryParam:"style=form,explode=true,name=download"`
    Margin *int32 `queryParam:"style=form,explode=true,name=margin"`
    Size *int32 `queryParam:"style=form,explode=true,name=size"`
    Text string `queryParam:"style=form,explode=true,name=text"`
    
}

type AvatarsGetQrSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AvatarsGetQrRequest struct {
    QueryParams AvatarsGetQrQueryParams 
    Security AvatarsGetQrSecurity 
    
}

type AvatarsGetQrResponse struct {
    ContentType string 
    StatusCode int64 
    
}

