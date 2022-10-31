package operations

import (
"openapi/pkg/models/shared")

type GetPermissionGroupsPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type GetPermissionGroupsRequest struct {
    PathParams GetPermissionGroupsPathParams 
    
}

type GetPermissionGroupsResponse struct {
    ContentType string 
    PermissionGroupModels []shared.PermissionGroupModel 
    StatusCode int64 
    
}

