package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUserRolesPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type RequestUserRolesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestUserRolesRequest struct {
	PathParams RequestUserRolesPathParams
	Headers    RequestUserRolesHeaders
}

type RequestUserRolesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleList      *shared.RoleList
	StatusCode    int64
}
