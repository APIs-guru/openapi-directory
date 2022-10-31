package operations

import (
"openapi/pkg/models/shared")

type ChangeUserPasswordHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type ChangeUserPasswordRequest struct {
    Headers ChangeUserPasswordHeaders 
    Request shared.ChangeUserPasswordRequest `request:"mediaType=application/json"`
    
}

type ChangeUserPasswordResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    ChangeUserPassword400ApplicationJSONOneOf *interface{} 
    
}

