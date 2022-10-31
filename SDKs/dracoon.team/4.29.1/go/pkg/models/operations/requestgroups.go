package operations

import (
	"openapi/pkg/models/shared"
)

type RequestGroupsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestGroupsHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestGroupsRequest struct {
	QueryParams RequestGroupsQueryParams
	Headers     RequestGroupsHeaders
}

type RequestGroupsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	GroupList     *shared.GroupList
	StatusCode    int64
}
