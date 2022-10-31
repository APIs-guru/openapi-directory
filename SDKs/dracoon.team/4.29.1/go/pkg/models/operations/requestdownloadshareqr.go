package operations

import (
	"openapi/pkg/models/shared"
)

type RequestDownloadShareQrPathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type RequestDownloadShareQrHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestDownloadShareQrRequest struct {
	PathParams RequestDownloadShareQrPathParams
	Headers    RequestDownloadShareQrHeaders
}

type RequestDownloadShareQrResponse struct {
	ContentType   string
	DownloadShare *shared.DownloadShare
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
