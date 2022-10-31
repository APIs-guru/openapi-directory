package operations

import (
"openapi/pkg/models/shared")

type DeleteSigninSigninIDPathParams struct {
    SigninID int64 `pathParam:"style=simple,explode=false,name=signinId"`
    
}

type DeleteSigninSigninIDRequest struct {
    PathParams DeleteSigninSigninIDPathParams 
    
}

type DeleteSigninSigninIDResponse struct {
    ContentType string 
    StatusCode int64 
    InvalidToken *shared.InvalidToken 
    
}

