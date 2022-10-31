package operations

import (
"openapi/pkg/models/shared")

type V2UpdateWelcomeBoxContentPathParams struct {
    Content string `pathParam:"style=simple,explode=false,name=content"`
    SpaceID string `pathParam:"style=simple,explode=false,name=spaceId"`
    
}

type V2UpdateWelcomeBoxContentRequestBody struct {
    DisplayWelcomeBox *bool `form:"name=displayWelcomeBox"`
    
}

type V2UpdateWelcomeBoxContentSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type V2UpdateWelcomeBoxContentRequest struct {
    PathParams V2UpdateWelcomeBoxContentPathParams 
    Request *V2UpdateWelcomeBoxContentRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security V2UpdateWelcomeBoxContentSecurity 
    
}

type V2UpdateWelcomeBoxContentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

