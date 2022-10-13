package operations

import (
	"openapi/pkg/models/shared"
)

type CashPaymentsProcessBatchRequest struct {
	Request []shared.BatchItemCashPaymentDto `request:"mediaType=application/json"`
}

type CashPaymentsProcessBatchResponse struct {
	CashPaymentsProcessBatch200ApplicationJSONObject map[string]interface{}
	ContentType                                      string
	StatusCode                                       int64
}
