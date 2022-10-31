package operations

import (
"openapi/pkg/models/shared")

type GetUserUserIDPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetUserUserIDRequest struct {
    PathParams GetUserUserIDPathParams 
    
}

type GetUserUserIDResponse struct {
    ContentType string 
    StatusCode int64 
    InvalidToken *shared.InvalidToken 
    UserRecord *shared.UserRecord 
    
}

