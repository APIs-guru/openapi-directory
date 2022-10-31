package operations

import (
"openapi/pkg/models/shared")

type RemoveGroupMembersPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RemoveGroupMembersHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RemoveGroupMembersRequest struct {
    PathParams RemoveGroupMembersPathParams 
    Headers RemoveGroupMembersHeaders 
    Request shared.ChangeGroupMembersRequest `request:"mediaType=application/json"`
    
}

type RemoveGroupMembersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Group *shared.Group 
    StatusCode int64 
    
}

