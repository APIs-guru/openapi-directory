package operations

import (
"openapi/pkg/models/shared")

type PatchGroupsGroupIDMembershipsUserIDPathParams struct {
    GroupID int32 `pathParam:"style=simple,explode=false,name=group_id"`
    UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type PatchGroupsGroupIDMembershipsUserIDRequestBody struct {
    Admin *bool `multipartForm:"name=admin"`
    
}

type PatchGroupsGroupIDMembershipsUserIDRequest struct {
    PathParams PatchGroupsGroupIDMembershipsUserIDPathParams 
    Request *PatchGroupsGroupIDMembershipsUserIDRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchGroupsGroupIDMembershipsUserIDResponse struct {
    ContentType string 
    GroupUserEntity *shared.GroupUserEntity 
    StatusCode int64 
    
}

