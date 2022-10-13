package operations

import (
	"openapi/pkg/models/shared"
)

type GetInboxUploadsQueryParams struct {
	Cursor              *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter              map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
	FilterGt            map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
	FilterGteq          map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
	FilterLike          map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
	FilterLt            map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
	FilterLteq          map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
	InboxID             *int32                 `queryParam:"style=form,explode=true,name=inbox_id"`
	InboxRegistrationID *int32                 `queryParam:"style=form,explode=true,name=inbox_registration_id"`
	PerPage             *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy              map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
}

type GetInboxUploadsRequest struct {
	QueryParams GetInboxUploadsQueryParams
}

type GetInboxUploadsResponse struct {
	ContentType         string
	InboxUploadEntities []shared.InboxUploadEntity
	StatusCode          int64
}
