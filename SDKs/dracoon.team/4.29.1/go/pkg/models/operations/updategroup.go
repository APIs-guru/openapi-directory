package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type UpdateGroupHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type UpdateGroupRequest struct {
    PathParams UpdateGroupPathParams 
    Headers UpdateGroupHeaders 
    Request shared.UpdateGroupRequest `request:"mediaType=application/json"`
    
}

type UpdateGroupResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Group *shared.Group 
    StatusCode int64 
    
}

