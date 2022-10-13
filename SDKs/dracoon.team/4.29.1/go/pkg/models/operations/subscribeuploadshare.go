package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeUploadSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type SubscribeUploadShareHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SubscribeUploadShareRequest struct {
	PathParams SubscribeUploadSharePathParams
	Headers    SubscribeUploadShareHeaders
}

type SubscribeUploadShareResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
	SubscribedUploadShare *shared.SubscribedUploadShare
}
