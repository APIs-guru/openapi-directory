package operations

import (
	"openapi/pkg/models/shared"
)

type RequestDeletedNodesSummaryPathParams struct {
	NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
}

type RequestDeletedNodesSummaryQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestDeletedNodesSummaryHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestDeletedNodesSummaryRequest struct {
	PathParams  RequestDeletedNodesSummaryPathParams
	QueryParams RequestDeletedNodesSummaryQueryParams
	Headers     RequestDeletedNodesSummaryHeaders
}

type RequestDeletedNodesSummaryResponse struct {
	ContentType            string
	DeletedNodeSummaryList *shared.DeletedNodeSummaryList
	ErrorResponse          *shared.ErrorResponse
	StatusCode             int64
}
