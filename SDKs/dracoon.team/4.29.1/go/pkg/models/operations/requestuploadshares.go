package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadSharesQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestUploadSharesHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestUploadSharesRequest struct {
	QueryParams RequestUploadSharesQueryParams
	Headers     RequestUploadSharesHeaders
}

type RequestUploadSharesResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	StatusCode      int64
	UploadShareList *shared.UploadShareList
}
