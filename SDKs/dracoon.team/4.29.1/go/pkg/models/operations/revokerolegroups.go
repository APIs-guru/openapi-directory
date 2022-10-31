package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeRoleGroupsPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type RevokeRoleGroupsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RevokeRoleGroupsRequest struct {
	PathParams RevokeRoleGroupsPathParams
	Headers    RevokeRoleGroupsHeaders
	Request    shared.GroupIds `request:"mediaType=application/json"`
}

type RevokeRoleGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleGroupList *shared.RoleGroupList
	StatusCode    int64
}
