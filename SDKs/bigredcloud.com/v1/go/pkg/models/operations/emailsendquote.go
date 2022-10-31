package operations

import (
	"openapi/pkg/models/shared"
)

type EmailSendQuoteRequest struct {
	Request shared.EmailQuoteDto `request:"mediaType=application/json"`
}

type EmailSendQuoteResponse struct {
	ContentType                            string
	EmailSendQuote200ApplicationJSONObject map[string]interface{}
	StatusCode                             int64
}
