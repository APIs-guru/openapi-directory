package operations

import (
	"openapi/pkg/models/shared"
)

type BehaviorListForPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type BehaviorListForPathQueryParams struct {
	Behavior   *string                `queryParam:"style=form,explode=true,name=behavior"`
	Cursor     *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter     map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt   map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt   map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	PerPage    *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	Recursive  *string                `queryParam:"style=form,explode=true,name=recursive"`
	SortBy     map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
}

type BehaviorListForPathRequest struct {
	PathParams  BehaviorListForPathPathParams
	QueryParams BehaviorListForPathQueryParams
}

type BehaviorListForPathResponse struct {
	BehaviorEntities []shared.BehaviorEntity
	ContentType      string
	StatusCode       int64
}
