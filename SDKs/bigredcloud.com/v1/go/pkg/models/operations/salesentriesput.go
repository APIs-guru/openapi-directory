package operations

import (
	"openapi/pkg/models/shared"
)

type SalesEntriesPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SalesEntriesPutRequest struct {
	PathParams SalesEntriesPutPathParams
	Request    shared.SalesEntryDto `request:"mediaType=application/json"`
}

type SalesEntriesPutResponse struct {
	ContentType                             string
	SalesEntriesPut200ApplicationJSONObject map[string]interface{}
	StatusCode                              int64
}
