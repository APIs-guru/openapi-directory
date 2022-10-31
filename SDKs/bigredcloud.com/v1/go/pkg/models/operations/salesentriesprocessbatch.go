package operations

import (
	"openapi/pkg/models/shared"
)

type SalesEntriesProcessBatchRequest struct {
	Request []shared.BatchItemSalesEntryDto `request:"mediaType=application/json"`
}

type SalesEntriesProcessBatchResponse struct {
	ContentType                                      string
	SalesEntriesProcessBatch200ApplicationJSONObject map[string]interface{}
	StatusCode                                       int64
}
