package operations

import (
	"openapi/pkg/models/shared"
)

type GetShippingFulfillmentsPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
}

type GetShippingFulfillmentsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetShippingFulfillmentsRequest struct {
	PathParams GetShippingFulfillmentsPathParams
	Security   GetShippingFulfillmentsSecurity
}

type GetShippingFulfillmentsResponse struct {
	ContentType                        string
	ShippingFulfillmentPagedCollection *shared.ShippingFulfillmentPagedCollection
	StatusCode                         int64
}
