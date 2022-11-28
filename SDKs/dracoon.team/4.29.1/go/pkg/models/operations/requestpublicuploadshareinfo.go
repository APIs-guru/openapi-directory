package operations

import (
	"openapi/pkg/models/shared"
)

type RequestPublicUploadShareInfoPathParams struct {
	AccessKey string `pathParam:"style=simple,explode=false,name=access_key"`
}

type RequestPublicUploadShareInfoHeaders struct {
	XSdsDateFormat    *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
	XSdsSharePassword *string      `header:"style=simple,explode=false,name=X-Sds-Share-Password"`
}

type RequestPublicUploadShareInfoRequest struct {
	PathParams RequestPublicUploadShareInfoPathParams
	Headers    RequestPublicUploadShareInfoHeaders
}

type RequestPublicUploadShareInfoResponseOutput struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	PublicUploadShare *shared.PublicUploadShareOutput
	StatusCode        int64
}
