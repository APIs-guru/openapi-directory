package operations



type DeletePermissionGroupPathParams struct {
    PermissionGroupID int64 `pathParam:"style=simple,explode=false,name=permissionGroupId"`
    
}

type DeletePermissionGroupRequest struct {
    PathParams DeletePermissionGroupPathParams 
    
}

type DeletePermissionGroupResponse struct {
    ContentType string 
    StatusCode int64 
    
}

