package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PaymentsPutRequest struct {
	PathParams PaymentsPutPathParams
	Request    shared.PaymentDto `request:"mediaType=application/json"`
}

type PaymentsPutResponse struct {
	ContentType                         string
	PaymentsPut200ApplicationJSONObject map[string]interface{}
	StatusCode                          int64
}
