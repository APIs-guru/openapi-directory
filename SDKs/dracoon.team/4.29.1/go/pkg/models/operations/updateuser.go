package operations

import (
"openapi/pkg/models/shared")

type UpdateUserPathParams struct {
    UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UpdateUserHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type UpdateUserRequest struct {
    PathParams UpdateUserPathParams 
    Headers UpdateUserHeaders 
    Request shared.UpdateUserRequest `request:"mediaType=application/json"`
    
}

type UpdateUserResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserData *shared.UserData 
    
}

