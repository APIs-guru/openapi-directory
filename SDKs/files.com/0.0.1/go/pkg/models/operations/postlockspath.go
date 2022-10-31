package operations

import (
"openapi/pkg/models/shared")

type PostLocksPathPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=path"`
    
}

type PostLocksPathRequestBody struct {
    AllowAccessByAnyUser *bool `multipartForm:"name=allow_access_by_any_user"`
    Exclusive *bool `multipartForm:"name=exclusive"`
    Recursive *string `multipartForm:"name=recursive"`
    Timeout *int32 `multipartForm:"name=timeout"`
    
}

type PostLocksPathRequest struct {
    PathParams PostLocksPathPathParams 
    Request *PostLocksPathRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostLocksPathResponse struct {
    ContentType string 
    LockEntity *shared.LockEntity 
    StatusCode int64 
    
}

