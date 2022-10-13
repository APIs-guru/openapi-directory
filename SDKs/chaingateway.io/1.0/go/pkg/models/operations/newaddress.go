package operations

import (
	"openapi/pkg/models/shared"
)

type NewAddressHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type NewAddressRequest struct {
	Headers NewAddressHeaders
	Request shared.NewAddressRequest `request:"mediaType=application/json"`
}

type NewAddressResponse struct {
	ContentType string
	StatusCode  int64
	NewAddress  *shared.NewAddress
}
