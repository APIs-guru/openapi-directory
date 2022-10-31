package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUsersQueryParams struct {
	Filter                 *string `queryParam:"style=form,explode=true,name=filter"`
	IncludeAttributes      *bool   `queryParam:"style=form,explode=true,name=include_attributes"`
	IncludeManageableRooms *bool   `queryParam:"style=form,explode=true,name=include_manageable_rooms"`
	IncludeRoles           *bool   `queryParam:"style=form,explode=true,name=include_roles"`
	Limit                  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset                 *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort                   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestUsersHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestUsersRequest struct {
	QueryParams RequestUsersQueryParams
	Headers     RequestUsersHeaders
}

type RequestUsersResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UserList      *shared.UserList
}
