package operations

import (
	"openapi/pkg/models/shared"
)

type RequestSystemRescueKeyPathParams struct {
	FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
}

type RequestSystemRescueKeyQueryParams struct {
	Version *string `queryParam:"style=form,explode=true,name=version"`
}

type RequestSystemRescueKeyHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestSystemRescueKeyRequest struct {
	PathParams  RequestSystemRescueKeyPathParams
	QueryParams RequestSystemRescueKeyQueryParams
	Headers     RequestSystemRescueKeyHeaders
}

type RequestSystemRescueKeyResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	FileKey       *shared.FileKey
	StatusCode    int64
}
