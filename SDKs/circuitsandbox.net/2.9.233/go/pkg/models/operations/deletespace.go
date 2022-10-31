package operations

import (
"openapi/pkg/models/shared")

type DeleteSpacePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSpaceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteSpaceRequest struct {
    PathParams DeleteSpacePathParams 
    Security DeleteSpaceSecurity 
    
}

type DeleteSpaceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

