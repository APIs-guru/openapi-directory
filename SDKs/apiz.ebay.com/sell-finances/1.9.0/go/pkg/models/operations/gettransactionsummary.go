package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionSummaryQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetTransactionSummarySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetTransactionSummaryRequest struct {
	QueryParams GetTransactionSummaryQueryParams
	Security    GetTransactionSummarySecurity
}

type GetTransactionSummaryResponse struct {
	ContentType                string
	StatusCode                 int64
	TransactionSummaryResponse *shared.TransactionSummaryResponse
}
