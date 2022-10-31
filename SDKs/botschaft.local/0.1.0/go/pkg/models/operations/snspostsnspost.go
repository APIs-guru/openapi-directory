package operations

import (
	"openapi/pkg/models/shared"
)

type SnsPostSnsPostHeaders struct {
	Authorization *string `header:"style=simple,explode=false,name=authorization"`
}

type SnsPostSnsPostRequest struct {
	Headers SnsPostSnsPostHeaders
	Request shared.SnsMessageRequest `request:"mediaType=application/json"`
}

type SnsPostSnsPostResponse struct {
	ContentType                         string
	HTTPValidationError                 *shared.HTTPValidationError
	StatusCode                          int64
	SnsPostSnsPost200ApplicationJSONAny *interface{}
}
