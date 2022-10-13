package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsGroupIDUsersPathParams struct {
	GroupID int32 `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupsGroupIDUsersQueryParams struct {
	Cursor  *string `queryParam:"style=form,explode=true,name=cursor"`
	PerPage *int32  `queryParam:"style=form,explode=true,name=per_page"`
	UserID  *int32  `queryParam:"style=form,explode=true,name=user_id"`
}

type GetGroupsGroupIDUsersRequest struct {
	PathParams  GetGroupsGroupIDUsersPathParams
	QueryParams GetGroupsGroupIDUsersQueryParams
}

type GetGroupsGroupIDUsersResponse struct {
	ContentType       string
	GroupUserEntities []shared.GroupUserEntity
	StatusCode        int64
}
