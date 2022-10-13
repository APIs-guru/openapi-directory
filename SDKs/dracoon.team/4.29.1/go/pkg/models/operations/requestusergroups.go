package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUserGroupsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type RequestUserGroupsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
}

type RequestUserGroupsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestUserGroupsRequest struct {
	PathParams  RequestUserGroupsPathParams
	QueryParams RequestUserGroupsQueryParams
	Headers     RequestUserGroupsHeaders
}

type RequestUserGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UserGroupList *shared.UserGroupList
}
