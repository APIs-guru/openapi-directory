package operations

import (
"openapi/pkg/models/shared")

type GetUserByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUserByIDSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetUserByIDRequest struct {
    PathParams GetUserByIDPathParams 
    Security GetUserByIDSecurity 
    
}

type GetUserByIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    User *interface{} 
    
}

