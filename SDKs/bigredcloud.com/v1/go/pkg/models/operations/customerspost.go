package operations

import (
	"openapi/pkg/models/shared"
)

type CustomersPostRequest struct {
	Request shared.CustomerDto `request:"mediaType=application/json"`
}

type CustomersPostResponse struct {
	ContentType                           string
	CustomersPost200ApplicationJSONObject map[string]interface{}
	StatusCode                            int64
}
