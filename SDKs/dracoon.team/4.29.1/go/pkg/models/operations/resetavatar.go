package operations

import (
"openapi/pkg/models/shared")

type ResetAvatarHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type ResetAvatarRequest struct {
    Headers ResetAvatarHeaders 
    
}

type ResetAvatarResponse struct {
    Avatar *shared.Avatar 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

