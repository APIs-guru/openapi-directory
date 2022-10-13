package operations

import (
	"openapi/pkg/models/shared"
)

type RequestGroupRolesPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type RequestGroupRolesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestGroupRolesRequest struct {
	PathParams RequestGroupRolesPathParams
	Headers    RequestGroupRolesHeaders
}

type RequestGroupRolesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleList      *shared.RoleList
	StatusCode    int64
}
