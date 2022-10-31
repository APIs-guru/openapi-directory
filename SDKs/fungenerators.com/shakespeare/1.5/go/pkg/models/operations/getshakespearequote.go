package operations

import (
	"openapi/pkg/models/shared"
)

type GetShakespeareQuoteSecurity struct {
	XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetShakespeareQuoteRequest struct {
	Security GetShakespeareQuoteSecurity
}

type GetShakespeareQuoteResponse struct {
	ContentType string
	StatusCode  int64
}
