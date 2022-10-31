package operations

import (
"openapi/pkg/models/shared")

type RequestUserAvatarPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
    UUID string `pathParam:"style=simple,explode=false,name=uuid"`
    
}

type RequestUserAvatarRequest struct {
    PathParams RequestUserAvatarPathParams 
    
}

type RequestUserAvatarResponse struct {
    Avatar *shared.Avatar 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

