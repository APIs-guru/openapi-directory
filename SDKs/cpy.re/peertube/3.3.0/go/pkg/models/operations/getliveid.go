package operations

import (
"openapi/pkg/models/shared")

type GetLiveIDPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLiveIDSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetLiveIDRequest struct {
    PathParams GetLiveIDPathParams 
    Security GetLiveIDSecurity 
    
}

type GetLiveIDResponse struct {
    ContentType string 
    LiveVideoResponse *interface{} 
    StatusCode int64 
    
}

