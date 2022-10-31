package operations

import (
"openapi/pkg/models/shared")

type CreateGroupHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type CreateGroupRequest struct {
    Headers CreateGroupHeaders 
    Request shared.CreateGroupRequest `request:"mediaType=application/json"`
    
}

type CreateGroupResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Group *shared.Group 
    StatusCode int64 
    
}

