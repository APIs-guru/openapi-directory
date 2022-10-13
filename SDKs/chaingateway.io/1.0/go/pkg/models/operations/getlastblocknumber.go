package operations

import (
	"openapi/pkg/models/shared"
)

type GetLastBlockNumberHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
	ContentType   string `header:"style=simple,explode=true,name=Content-Type"`
}

type GetLastBlockNumberRequest struct {
	Headers GetLastBlockNumberHeaders
}

type GetLastBlockNumberResponse struct {
	ContentType        string
	StatusCode         int64
	GetLastBlockNumber *shared.GetLastBlockNumber
}
