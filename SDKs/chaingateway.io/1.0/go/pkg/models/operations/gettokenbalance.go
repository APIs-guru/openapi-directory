package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenBalanceHeaders struct {
	Authorization string `header:"style=simple,explode=true,name=Authorization"`
}

type GetTokenBalanceRequest struct {
	Headers GetTokenBalanceHeaders
	Request shared.GetTokenBalanceRequest `request:"mediaType=application/json"`
}

type GetTokenBalanceResponse struct {
	ContentType     string
	StatusCode      int64
	GetTokenBalance *shared.GetTokenBalance
}
