package operations

import (
"openapi/pkg/models/shared")

type GetUsersIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDRequest struct {
    PathParams GetUsersIDPathParams 
    
}

type GetUsersIDResponse struct {
    ContentType string 
    StatusCode int64 
    UserEntity *shared.UserEntity 
    
}

