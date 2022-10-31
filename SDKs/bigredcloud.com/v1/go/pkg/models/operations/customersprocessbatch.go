package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersProcessBatchRequest struct {
	Request []shared.BatchItemCustomerDto `request:"mediaType=application/json"`
}

type CustomersProcessBatchResponse struct {
	ContentType                                   string
	CustomersProcessBatch200ApplicationJSONObject map[string]interface{}
	StatusCode                                    int64
}
