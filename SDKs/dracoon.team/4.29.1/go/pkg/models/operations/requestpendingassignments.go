package operations

import (
	"openapi/pkg/models/shared"
)

type RequestPendingAssignmentsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestPendingAssignmentsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestPendingAssignmentsRequest struct {
	QueryParams RequestPendingAssignmentsQueryParams
	Headers     RequestPendingAssignmentsHeaders
}

type RequestPendingAssignmentsResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	PendingAssignmentList *shared.PendingAssignmentList
	StatusCode            int64
}
