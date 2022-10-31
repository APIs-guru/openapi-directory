package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAddressHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteAddressRequest struct {
	Headers DeleteAddressHeaders
	Request shared.DeleteAddressRequest `request:"mediaType=application/json"`
}

type DeleteAddressResponse struct {
	ContentType   string
	StatusCode    int64
	DeleteAddress *shared.DeleteAddress
}
