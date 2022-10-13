package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsGroupIDPermissionsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupsGroupIDPermissionsQueryParams struct {
	Cursor        *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter        map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt      map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq    map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike    map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt      map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq    map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	IncludeGroups *bool                  `queryParam:"style=form,explode=true,name=include_groups"`
	Path          *string                `queryParam:"style=form,explode=true,name=path"`
	PerPage       *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy        map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
	UserID        *string                `queryParam:"style=form,explode=true,name=user_id"`
}

type GetGroupsGroupIDPermissionsRequest struct {
	PathParams  GetGroupsGroupIDPermissionsPathParams
	QueryParams GetGroupsGroupIDPermissionsQueryParams
}

type GetGroupsGroupIDPermissionsResponse struct {
	ContentType        string
	PermissionEntities []shared.PermissionEntity
	StatusCode         int64
}
