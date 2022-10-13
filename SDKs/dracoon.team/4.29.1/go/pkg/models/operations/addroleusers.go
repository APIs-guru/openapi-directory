package operations

import (
	"openapi/pkg/models/shared"
)

type AddRoleUsersPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type AddRoleUsersHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type AddRoleUsersRequest struct {
	PathParams AddRoleUsersPathParams
	Headers    AddRoleUsersHeaders
	Request    shared.UserIds `request:"mediaType=application/json"`
}

type AddRoleUsersResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleUserList  *shared.RoleUserList
	StatusCode    int64
}
