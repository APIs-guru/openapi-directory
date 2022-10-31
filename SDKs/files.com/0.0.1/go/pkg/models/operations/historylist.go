package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type HistoryListQueryParams struct {
	Cursor     *string                `queryParam:"style=form,explode=true,name=cursor"`
	Display    *string                `queryParam:"style=form,explode=true,name=display"`
	EndAt      *time.Time             `queryParam:"style=form,explode=true,name=end_at"`
	Filter     map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt   map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt   map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	PerPage    *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy     map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
	StartAt    *time.Time             `queryParam:"style=form,explode=true,name=start_at"`
}

type HistoryListRequest struct {
	QueryParams HistoryListQueryParams
}

type HistoryListResponse struct {
	ActionEntities []shared.ActionEntity
	ContentType    string
	StatusCode     int64
}
