package operations

import (
	"openapi/pkg/models/shared"
)

type RequestRoleGroupsPathParams struct {
	RoleID int32 `pathParam:"style=simple,explode=false,name=role_id"`
}

type RequestRoleGroupsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestRoleGroupsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestRoleGroupsRequest struct {
	PathParams  RequestRoleGroupsPathParams
	QueryParams RequestRoleGroupsQueryParams
	Headers     RequestRoleGroupsHeaders
}

type RequestRoleGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	RoleGroupList *shared.RoleGroupList
	StatusCode    int64
}
