package operations

import (
	"openapi/pkg/models/shared"
)

type AddRoleGroupsPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type AddRoleGroupsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type AddRoleGroupsRequest struct {
	PathParams AddRoleGroupsPathParams
	Headers    AddRoleGroupsHeaders
	Request    shared.GroupIds `request:"mediaType=application/json"`
}

type AddRoleGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleGroupList *shared.RoleGroupList
	StatusCode    int64
}
