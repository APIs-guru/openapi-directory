package operations

import (
	"openapi/pkg/models/shared"
)

type SendbatchPostHeaders struct {
	Accept      string `header:"style=simple,explode=false,name=Accept"`
	ContentType string `header:"style=simple,explode=false,name=Content-Type"`
}

type SendbatchPostRequest struct {
	Headers SendbatchPostHeaders
	Request shared.BulkSmsRequest `request:"mediaType=application/json"`
}

type SendbatchPostResponse struct {
	ContentType string
	StatusCode  int64
}
