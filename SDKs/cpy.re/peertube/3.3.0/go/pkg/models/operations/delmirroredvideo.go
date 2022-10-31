package operations

import (
"openapi/pkg/models/shared")

type DelMirroredVideoPathParams struct {
    RedundancyID string `pathParam:"style=simple,explode=false,name=redundancyId"`
    
}

type DelMirroredVideoSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DelMirroredVideoRequest struct {
    PathParams DelMirroredVideoPathParams 
    Security DelMirroredVideoSecurity 
    
}

type DelMirroredVideoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

