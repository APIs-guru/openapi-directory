package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUploadShareHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CreateUploadShareRequest struct {
	Headers CreateUploadShareHeaders
	Request shared.CreateUploadShareRequest `request:"mediaType=application/json"`
}

type CreateUploadShareResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	StatusCode                               int64
	UploadShare                              *shared.UploadShare
	CreateUploadShare400ApplicationJSONOneOf *interface{}
}
