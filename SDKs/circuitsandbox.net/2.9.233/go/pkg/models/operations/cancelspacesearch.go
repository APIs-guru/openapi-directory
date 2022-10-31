package operations

import (
"openapi/pkg/models/shared")

type CancelSpaceSearchPathParams struct {
    SearchID string `pathParam:"style=simple,explode=false,name=searchId"`
    
}

type CancelSpaceSearchSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CancelSpaceSearchRequest struct {
    PathParams CancelSpaceSearchPathParams 
    Security CancelSpaceSearchSecurity 
    
}

type CancelSpaceSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

