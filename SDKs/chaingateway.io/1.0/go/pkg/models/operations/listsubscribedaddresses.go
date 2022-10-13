package operations

import (
	"openapi/pkg/models/shared"
)

type ListSubscribedAddressesHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
	ContentType   string `header:"style=simple,explode=true,name=Content-Type"`
}

type ListSubscribedAddressesRequest struct {
	Headers ListSubscribedAddressesHeaders
}

type ListSubscribedAddressesResponse struct {
	ContentType             string
	StatusCode              int64
	ListSubscribedAddresses *shared.ListSubscribedAddresses
}
