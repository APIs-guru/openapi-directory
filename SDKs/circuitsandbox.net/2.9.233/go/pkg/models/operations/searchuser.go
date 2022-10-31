package operations

import (
"openapi/pkg/models/shared")

type SearchUserQueryParams struct {
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type SearchUserSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type SearchUserRequest struct {
    QueryParams SearchUserQueryParams 
    Security SearchUserSecurity 
    
}

type SearchUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Users []interface{} 
    
}

