package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDGroupsPathParams struct {
	UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDGroupsQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	GroupID *int32  `queryParam:"style=form,explode=true,name=group_id"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetUsersUserIDGroupsRequest struct {
	PathParams  GetUsersUserIDGroupsPathParams
	QueryParams GetUsersUserIDGroupsQueryParams
}

type GetUsersUserIDGroupsResponse struct {
	ContentType       string
	GroupUserEntities []shared.GroupUserEntity
	StatusCode        int64
}
