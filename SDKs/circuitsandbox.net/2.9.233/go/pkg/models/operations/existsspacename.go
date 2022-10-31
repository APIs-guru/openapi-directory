package operations

import (
"openapi/pkg/models/shared")

type ExistsSpaceNamePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ExistsSpaceNameSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ExistsSpaceNameRequest struct {
    PathParams ExistsSpaceNamePathParams 
    Security ExistsSpaceNameSecurity 
    
}

type ExistsSpaceNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

