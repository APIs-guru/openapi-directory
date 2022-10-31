package operations

import (
"openapi/pkg/models/shared")

type UpdatePermissionGroupPathParams struct {
    PermissionGroupID int64 `pathParam:"style=simple,explode=false,name=permissionGroupId"`
    
}

type UpdatePermissionGroupRequests struct {
    UpdatePermissionGroupRequest *shared.UpdatePermissionGroupRequest `request:"mediaType=application/*+json"`
    UpdatePermissionGroupRequest1 *shared.UpdatePermissionGroupRequest `request:"mediaType=application/json"`
    UpdatePermissionGroupRequest2 *shared.UpdatePermissionGroupRequest `request:"mediaType=text/json"`
    
}

type UpdatePermissionGroupRequest struct {
    PathParams UpdatePermissionGroupPathParams 
    Request UpdatePermissionGroupRequests 
    
}

type UpdatePermissionGroupResponse struct {
    ContentType string 
    PermissionGroupModel *shared.PermissionGroupModel 
    StatusCode int64 
    
}

