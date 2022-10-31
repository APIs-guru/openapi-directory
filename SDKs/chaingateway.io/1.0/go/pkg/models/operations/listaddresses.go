package operations

import (
	"openapi/pkg/models/shared"
)

type ListAddressesHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	ContentType   string `header:"style=simple,explode=false,name=Content-Type"`
}

type ListAddressesRequest struct {
	Headers ListAddressesHeaders
}

type ListAddressesResponse struct {
	ContentType   string
	StatusCode    int64
	ListAddresses *shared.ListAddresses
}
