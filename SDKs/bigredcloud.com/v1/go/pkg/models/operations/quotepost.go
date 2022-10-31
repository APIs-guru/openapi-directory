package operations

import (
	"openapi/pkg/models/shared"
)

type QuotePostRequest struct {
	Request shared.QuoteDto `request:"mediaType=application/json"`
}

type QuotePostResponse struct {
	ContentType                       string
	QuotePost200ApplicationJSONObject map[string]interface{}
	StatusCode                        int64
}
