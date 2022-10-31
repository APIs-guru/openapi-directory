package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUploadShareQrPathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type RequestUploadShareQrHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestUploadShareQrRequest struct {
	PathParams RequestUploadShareQrPathParams
	Headers    RequestUploadShareQrHeaders
}

type RequestUploadShareQrResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	UploadShare   *shared.UploadShare
}
