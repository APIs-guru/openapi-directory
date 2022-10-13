package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeAddressHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type SubscribeAddressRequest struct {
	Headers SubscribeAddressHeaders
	Request shared.SubscribeAddressRequest `request:"mediaType=application/json"`
}

type SubscribeAddressResponse struct {
	ContentType      string
	StatusCode       int64
	SubscribeAddress *shared.SubscribeAddress
}
