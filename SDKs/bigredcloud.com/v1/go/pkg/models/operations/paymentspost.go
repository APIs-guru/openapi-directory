package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsPostRequest struct {
	Request shared.PaymentDto `request:"mediaType=application/json"`
}

type PaymentsPostResponse struct {
	ContentType                          string
	PaymentsPost200ApplicationJSONObject map[string]interface{}
	StatusCode                           int64
}
