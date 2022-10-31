package operations

import (
	"openapi/pkg/models/shared"
)

type QuoteGetResponse struct {
	ContentType        string
	PageResultQuoteDto *shared.PageResultQuoteDto
	StatusCode         int64
}
