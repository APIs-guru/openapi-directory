package operations

import (
	"openapi/pkg/models/shared"
)

type GetShippingFulfillmentPathParams struct {
	FulfillmentID string `pathParam:"style=simple,explode=false,name=fulfillmentId"`
	OrderID       string `pathParam:"style=simple,explode=false,name=orderId"`
}

type GetShippingFulfillmentSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetShippingFulfillmentRequest struct {
	PathParams GetShippingFulfillmentPathParams
	Security   GetShippingFulfillmentSecurity
}

type GetShippingFulfillmentResponse struct {
	ContentType         string
	ShippingFulfillment *shared.ShippingFulfillment
	StatusCode          int64
}
