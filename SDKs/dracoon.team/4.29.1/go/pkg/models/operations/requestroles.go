package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRolesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestRolesRequest struct {
	Headers RequestRolesHeaders
}

type RequestRolesResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleList      *shared.RoleList
	StatusCode    int64
}
