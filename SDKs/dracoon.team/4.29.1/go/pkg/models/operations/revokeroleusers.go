package operations

import (
	"openapi/pkg/models/shared"
)

type RevokeRoleUsersPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type RevokeRoleUsersHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RevokeRoleUsersRequest struct {
	PathParams RevokeRoleUsersPathParams
	Headers    RevokeRoleUsersHeaders
	Request    shared.UserIds `request:"mediaType=application/json"`
}

type RevokeRoleUsersResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleUserList  *shared.RoleUserList
	StatusCode    int64
}
