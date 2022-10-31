package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDownloadShareHeaders struct {
	XSdsAuthToken  *string      `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
}

type CreateDownloadShareRequest struct {
	Headers CreateDownloadShareHeaders
	Request shared.CreateDownloadShareRequest `request:"mediaType=application/json"`
}

type CreateDownloadShareResponse struct {
	ContentType                                string
	DownloadShare                              *shared.DownloadShare
	ErrorResponse                              *shared.ErrorResponse
	StatusCode                                 int64
	CreateDownloadShare400ApplicationJSONOneOf *interface{}
}
