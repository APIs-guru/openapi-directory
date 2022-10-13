package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type RequestUploadShareHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestUploadShareRequest struct {
	PathParams RequestUploadSharePathParams
	Headers    RequestUploadShareHeaders
}

type RequestUploadShareResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UploadShare   *shared.UploadShare
}
