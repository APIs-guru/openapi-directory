package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDownloadSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type UpdateDownloadShareHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type UpdateDownloadShareRequest struct {
	PathParams UpdateDownloadSharePathParams
	Headers    UpdateDownloadShareHeaders
	Request    shared.UpdateDownloadShareRequest `request:"mediaType=application/json"`
}

type UpdateDownloadShareResponse struct {
	ContentType                                string
	DownloadShare                              *shared.DownloadShare
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	UpdateDownloadShare400ApplicationJSONOneOf *interface{}
}
