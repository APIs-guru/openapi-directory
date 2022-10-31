package operations

import (
"openapi/pkg/models/shared")

type AvatarsGetInitialsQueryParams struct {
    Background *string `queryParam:"style=form,explode=true,name=background"`
    Color *string `queryParam:"style=form,explode=true,name=color"`
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type AvatarsGetInitialsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type AvatarsGetInitialsRequest struct {
    QueryParams AvatarsGetInitialsQueryParams 
    Security AvatarsGetInitialsSecurity 
    
}

type AvatarsGetInitialsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

