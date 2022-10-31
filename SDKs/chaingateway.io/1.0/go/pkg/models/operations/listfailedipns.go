package operations

import (
	"openapi/pkg/models/shared"
)

type ListFailedIPNsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	ContentType   string `header:"style=simple,explode=false,name=Content-Type"`
}

type ListFailedIPNsRequest struct {
	Headers ListFailedIPNsHeaders
}

type ListFailedIPNsResponse struct {
	ContentType    string
	StatusCode     int64
	ListFailedIPNs *shared.ListFailedIPNs
}
