package operations

import (
	"openapi/pkg/models/shared"
)

type GetPermissionGroupPathParams struct {
	PermissionGroupID int64 `pathParam:"style=simple,explode=false,name=permissionGroupId"`
}

type GetPermissionGroupRequest struct {
	PathParams GetPermissionGroupPathParams
}

type GetPermissionGroupResponse struct {
	ContentType          string
	PermissionGroupModel *shared.PermissionGroupModel
	StatusCode           int64
}
