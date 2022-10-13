package operations

import (
	"openapi/pkg/models/shared"
)

type SendPostHeaders struct {
	Accept      string `header:"name=Accept"`
	ContentType string `header:"name=Content-Type"`
}

type SendPostRequest struct {
	Headers SendPostHeaders
	Request shared.SendSmsRequest `request:"mediaType=application/json"`
}

type SendPostResponse struct {
	ContentType                   string
	SendPost500ApplicationJSONAny *interface{}
	StatusCode                    int64
}
