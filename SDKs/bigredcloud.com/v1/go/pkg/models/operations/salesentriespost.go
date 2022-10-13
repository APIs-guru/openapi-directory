package operations

import (
	"openapi/pkg/models/shared"
)

type SalesEntriesPostRequest struct {
	Request shared.SalesEntryDto `request:"mediaType=application/json"`
}

type SalesEntriesPostResponse struct {
	ContentType                              string
	SalesEntriesPost200ApplicationJSONObject map[string]interface{}
	StatusCode                               int64
}
