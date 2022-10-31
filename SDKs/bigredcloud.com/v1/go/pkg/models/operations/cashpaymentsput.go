package operations

import (
	"openapi/pkg/models/shared"
)

type CashPaymentsPutPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CashPaymentsPutRequest struct {
	PathParams CashPaymentsPutPathParams
	Request    shared.CashPaymentDto `request:"mediaType=application/json"`
}

type CashPaymentsPutResponse struct {
	CashPaymentsPut200ApplicationJSONObject map[string]interface{}
	ContentType                             string
	StatusCode                              int64
}
