package operations

import (
	"openapi/pkg/models/shared"
)

type SalesRepPostRequest struct {
	Request shared.SaleRepsDto `request:"mediaType=application/json"`
}

type SalesRepPostResponse struct {
	ContentType                          string
	SalesRepPost200ApplicationJSONObject map[string]interface{}
	StatusCode                           int64
}
