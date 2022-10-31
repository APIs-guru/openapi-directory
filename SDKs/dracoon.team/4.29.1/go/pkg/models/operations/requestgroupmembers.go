package operations

import (
"openapi/pkg/models/shared")

type RequestGroupMembersPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RequestGroupMembersQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type RequestGroupMembersHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestGroupMembersRequest struct {
    PathParams RequestGroupMembersPathParams 
    QueryParams RequestGroupMembersQueryParams 
    Headers RequestGroupMembersHeaders 
    
}

type RequestGroupMembersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    GroupUserList *shared.GroupUserList 
    StatusCode int64 
    
}

