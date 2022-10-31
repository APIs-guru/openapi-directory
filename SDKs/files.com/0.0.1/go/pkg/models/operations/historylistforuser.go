package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type HistoryListForUserPathParams struct {
	UserID int32 `pathParam:"style=simple,explode=false,name=user_id"`
}

type HistoryListForUserQueryParams struct {
	Cursor  *string                `queryParam:"style=form,explode=true,name=cursor"`
	Display *string                `queryParam:"style=form,explode=true,name=display"`
	EndAt   *time.Time             `queryParam:"style=form,explode=true,name=end_at"`
	PerPage *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy  map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
	StartAt *time.Time             `queryParam:"style=form,explode=true,name=start_at"`
}

type HistoryListForUserRequest struct {
	PathParams  HistoryListForUserPathParams
	QueryParams HistoryListForUserQueryParams
}

type HistoryListForUserResponse struct {
	ActionEntities []shared.ActionEntity
	ContentType    string
	StatusCode     int64
}
