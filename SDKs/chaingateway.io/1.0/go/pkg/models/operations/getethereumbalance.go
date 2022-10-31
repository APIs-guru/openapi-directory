package operations

import (
	"openapi/pkg/models/shared"
)

type GetEthereumBalanceHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetEthereumBalanceRequest struct {
	Headers GetEthereumBalanceHeaders
	Request shared.GetEthereumBalanceRequest `request:"mediaType=application/json"`
}

type GetEthereumBalanceResponse struct {
	ContentType        string
	StatusCode         int64
	GetEthereumBalance *shared.GetEthereumBalance
}
