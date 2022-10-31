package operations

import (
"openapi/pkg/models/shared")

type AddGroupMembersPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type AddGroupMembersHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type AddGroupMembersRequest struct {
    PathParams AddGroupMembersPathParams 
    Headers AddGroupMembersHeaders 
    Request shared.ChangeGroupMembersRequest `request:"mediaType=application/json"`
    
}

type AddGroupMembersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Group *shared.Group 
    StatusCode int64 
    
}

