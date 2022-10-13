package operations

import (
	"openapi/pkg/models/shared"
)

type GetNotificationsQueryParams struct {
	Cursor           *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter           map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt         map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq       map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike       map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt         map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq       map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	GroupID          *int32                 `queryParam:"style=form,explode=true,name=group_id"`
	IncludeAncestors *bool                  `queryParam:"style=form,explode=true,name=include_ancestors"`
	Path             *string                `queryParam:"style=form,explode=true,name=path"`
	PerPage          *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy           map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
	UserID           *int32                 `queryParam:"style=form,explode=true,name=user_id"`
}

type GetNotificationsRequest struct {
	QueryParams GetNotificationsQueryParams
}

type GetNotificationsResponse struct {
	ContentType          string
	NotificationEntities []shared.NotificationEntity
	StatusCode           int64
}
