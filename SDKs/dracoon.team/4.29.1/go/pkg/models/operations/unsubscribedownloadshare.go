package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeDownloadSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type UnsubscribeDownloadShareHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UnsubscribeDownloadShareRequest struct {
	PathParams UnsubscribeDownloadSharePathParams
	Headers    UnsubscribeDownloadShareHeaders
}

type UnsubscribeDownloadShareResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
