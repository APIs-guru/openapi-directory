package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTransactionsRequest struct {
	Headers GetTransactionsHeaders
	Request shared.GetTransactionsRequest `request:"mediaType=application/json"`
}

type GetTransactionsResponse struct {
	ContentType     string
	StatusCode      int64
	GetTransactions *shared.GetTransactions
}
