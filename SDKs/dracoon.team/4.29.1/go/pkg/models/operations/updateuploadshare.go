package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUploadSharePathParams struct {
	ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
}

type UpdateUploadShareHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type UpdateUploadShareRequest struct {
	PathParams UpdateUploadSharePathParams
	Headers    UpdateUploadShareHeaders
	Request    shared.UpdateUploadShareRequest `request:"mediaType=application/json"`
}

type UpdateUploadShareResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	UploadShare                              *shared.UploadShare
	UpdateUploadShare400ApplicationJSONOneOf *interface{}
}
