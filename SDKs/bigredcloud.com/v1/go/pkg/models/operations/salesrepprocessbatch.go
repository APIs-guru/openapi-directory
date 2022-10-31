package operations

import (
	"openapi/pkg/models/shared"
)

type SalesRepProcessBatchRequest struct {
	Request []shared.BatchItemSaleRepsDto `request:"mediaType=application/json"`
}

type SalesRepProcessBatchResponse struct {
	ContentType                                  string
	SalesRepProcessBatch200ApplicationJSONObject map[string]interface{}
	StatusCode                                   int64
}
