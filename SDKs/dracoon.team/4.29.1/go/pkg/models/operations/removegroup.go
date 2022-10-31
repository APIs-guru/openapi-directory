package operations

import (
"openapi/pkg/models/shared")

type RemoveGroupPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RemoveGroupHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveGroupRequest struct {
    PathParams RemoveGroupPathParams 
    Headers RemoveGroupHeaders 
    
}

type RemoveGroupResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

