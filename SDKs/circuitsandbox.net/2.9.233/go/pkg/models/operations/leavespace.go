package operations

import (
"openapi/pkg/models/shared")

type LeaveSpacePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LeaveSpaceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type LeaveSpaceRequest struct {
    PathParams LeaveSpacePathParams 
    Security LeaveSpaceSecurity 
    
}

type LeaveSpaceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

