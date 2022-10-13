package operations

import (
	"openapi/pkg/models/shared"
)

type RequestDownloadSharesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestDownloadSharesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestDownloadSharesRequest struct {
	QueryParams RequestDownloadSharesQueryParams
	Headers     RequestDownloadSharesHeaders
}

type RequestDownloadSharesResponse struct {
	ContentType       string
	DownloadShareList *shared.DownloadShareList
	ErrorResponse     *shared.ErrorResponse
	StatusCode        int64
}
