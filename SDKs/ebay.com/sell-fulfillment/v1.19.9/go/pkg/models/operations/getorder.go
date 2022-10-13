package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
}

type GetOrderQueryParams struct {
	FieldGroups *string `queryParam:"style=form,explode=true,name=fieldGroups"`
}

type GetOrderSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetOrderRequest struct {
	PathParams  GetOrderPathParams
	QueryParams GetOrderQueryParams
	Security    GetOrderSecurity
}

type GetOrderResponse struct {
	ContentType string
	Order       *shared.Order
	StatusCode  int64
}
