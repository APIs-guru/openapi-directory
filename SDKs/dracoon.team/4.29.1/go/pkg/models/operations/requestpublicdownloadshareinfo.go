package operations

import (
	"openapi/pkg/models/shared"
)

type RequestPublicDownloadShareInfoPathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
}

type RequestPublicDownloadShareInfoHeaders struct {
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type RequestPublicDownloadShareInfoRequest struct {
	PathParams RequestPublicDownloadShareInfoPathParams
	Headers    RequestPublicDownloadShareInfoHeaders
}

type RequestPublicDownloadShareInfoResponseOutput struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	PublicDownloadShare *shared.PublicDownloadShareOutput
	StatusCode          int64
}
