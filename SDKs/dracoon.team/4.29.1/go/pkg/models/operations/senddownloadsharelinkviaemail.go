package operations

import (
	"openapi/pkg/models/shared"
)

type SendDownloadShareLinkViaEmailPathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type SendDownloadShareLinkViaEmailHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SendDownloadShareLinkViaEmailRequest struct {
	PathParams SendDownloadShareLinkViaEmailPathParams
	Headers    SendDownloadShareLinkViaEmailHeaders
	Request    shared.DownloadShareLinkEmail `request:"mediaType=application/json"`
}

type SendDownloadShareLinkViaEmailResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
