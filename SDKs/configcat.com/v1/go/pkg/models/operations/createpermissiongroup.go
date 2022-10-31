package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePermissionGroupPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
}

type CreatePermissionGroupRequests struct {
	CreatePermissionGroupRequest  *shared.CreatePermissionGroupRequest `request:"mediaType=application/*+json"`
	CreatePermissionGroupRequest1 *shared.CreatePermissionGroupRequest `request:"mediaType=application/json"`
	CreatePermissionGroupRequest2 *shared.CreatePermissionGroupRequest `request:"mediaType=text/json"`
}

type CreatePermissionGroupRequest struct {
	PathParams CreatePermissionGroupPathParams
	Request    CreatePermissionGroupRequests
}

type CreatePermissionGroupResponse struct {
	ContentType          string
	PermissionGroupModel *shared.PermissionGroupModel
	StatusCode           int64
}
