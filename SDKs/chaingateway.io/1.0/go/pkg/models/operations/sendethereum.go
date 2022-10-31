package operations

import (
	"openapi/pkg/models/shared"
)

type SendEthereumHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type SendEthereumRequest struct {
	Headers SendEthereumHeaders
	Request shared.SendEthereumRequest `request:"mediaType=application/json"`
}

type SendEthereumResponse struct {
	ContentType  string
	StatusCode   int64
	SendEthereum *shared.SendEthereum
}
