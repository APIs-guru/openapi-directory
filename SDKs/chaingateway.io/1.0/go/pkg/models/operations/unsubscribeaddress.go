package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeAddressHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type UnsubscribeAddressRequest struct {
	Headers UnsubscribeAddressHeaders
	Request shared.UnsubscribeAddressRequest `request:"mediaType=application/json"`
}

type UnsubscribeAddressResponse struct {
	ContentType        string
	StatusCode         int64
	UnsubscribeAddress *shared.UnsubscribeAddress
}
