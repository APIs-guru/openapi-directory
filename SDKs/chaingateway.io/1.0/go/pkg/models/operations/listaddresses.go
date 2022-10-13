package operations

import (
	"openapi/pkg/models/shared"
)

type ListAddressesHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
	ContentType   string `header:"style=simple,explode=true,name=Content-Type"`
}

type ListAddressesRequest struct {
	Headers ListAddressesHeaders
}

type ListAddressesResponse struct {
	ContentType   string
	StatusCode    int64
	ListAddresses *shared.ListAddresses
}
