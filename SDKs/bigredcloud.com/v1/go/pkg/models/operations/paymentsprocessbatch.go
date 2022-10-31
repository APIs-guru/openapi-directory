package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsProcessBatchRequest struct {
	Request []shared.BatchItemPaymentDto `request:"mediaType=application/json"`
}

type PaymentsProcessBatchResponse struct {
	ContentType                                  string
	PaymentsProcessBatch200ApplicationJSONObject map[string]interface{}
	StatusCode                                   int64
}
