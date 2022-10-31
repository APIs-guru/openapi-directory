package operations

import (
	"openapi/pkg/models/shared"
)

type QuotePostCreateQuoteWithGeneratingReferenceRequest struct {
	Request shared.QuoteDto `request:"mediaType=application/json"`
}

type QuotePostCreateQuoteWithGeneratingReferenceResponse struct {
	ContentType                                                         string
	QuotePostCreateQuoteWithGeneratingReference200ApplicationJSONObject map[string]interface{}
	StatusCode                                                          int64
}
