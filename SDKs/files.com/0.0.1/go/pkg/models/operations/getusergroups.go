package operations

import (
"openapi/pkg/models/shared")

type GetUserGroupsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    GroupID *int32 `queryParam:"style=form,explode=true,name=group_id"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetUserGroupsRequest struct {
    QueryParams GetUserGroupsQueryParams 
    
}

type GetUserGroupsResponse struct {
    ContentType string 
    GroupUserEntities []shared.GroupUserEntity 
    StatusCode int64 
    
}

