package operations

import (
"openapi/pkg/models/shared")

type GetUserPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUserQueryParams struct {
    WithStats *bool `queryParam:"style=form,explode=true,name=withStats"`
    
}

type GetUserSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetUserRequest struct {
    PathParams GetUserPathParams 
    QueryParams GetUserQueryParams 
    Security GetUserSecurity 
    
}

type GetUserResponse struct {
    ContentType string 
    StatusCode int64 
    GetUser200ApplicationJSONOneOf *interface{} 
    
}

