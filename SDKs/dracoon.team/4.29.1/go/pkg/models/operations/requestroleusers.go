package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoleUsersPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type RequestRoleUsersQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestRoleUsersHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type RequestRoleUsersRequest struct {
	PathParams  RequestRoleUsersPathParams
	QueryParams RequestRoleUsersQueryParams
	Headers     RequestRoleUsersHeaders
}

type RequestRoleUsersResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleUserList  *shared.RoleUserList
	StatusCode    int64
}
