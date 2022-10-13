package operations

import (
	"openapi/pkg/models/shared"
)

type SendTokenHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type SendTokenRequest struct {
	Headers SendTokenHeaders
	Request shared.SendTokenRequest `request:"mediaType=application/json"`
}

type SendTokenResponse struct {
	ContentType string
	StatusCode  int64
	SendToken   *shared.SendToken
}
