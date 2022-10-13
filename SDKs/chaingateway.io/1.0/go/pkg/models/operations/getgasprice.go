package operations

import (
	"openapi/pkg/models/shared"
)

type GetGasPriceHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
	ContentType   string `header:"style=simple,explode=true,name=Content-Type"`
}

type GetGasPriceRequest struct {
	Headers GetGasPriceHeaders
}

type GetGasPriceResponse struct {
	ContentType string
	StatusCode  int64
	GetGasPrice *shared.GetGasPrice
}
