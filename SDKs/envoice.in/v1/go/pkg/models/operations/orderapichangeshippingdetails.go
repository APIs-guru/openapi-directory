package operations

import (
	"openapi/pkg/models/shared"
)

type OrderAPIChangeShippingDetailsQueryParams struct {
	OrderID int32 `queryParam:"style=form,explode=true,name=orderId"`
}

type OrderAPIChangeShippingDetailsHeaders struct {
	XAuthKey    string `header:"style=simple,explode=false,name=x-auth-key"`
	XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
}

type OrderAPIChangeShippingDetailsRequests struct {
	ApplicationXML                []byte                               `request:"mediaType=application/xml"`
	OrderShippingDetailsAPIModel  *shared.OrderShippingDetailsAPIModel `request:"mediaType=application/json"`
	OrderShippingDetailsAPIModel1 *shared.OrderShippingDetailsAPIModel `request:"mediaType=application/x-www-form-urlencoded"`
	OrderShippingDetailsAPIModel2 *shared.OrderShippingDetailsAPIModel `request:"mediaType=text/json"`
	TextHTML                      []byte                               `request:"mediaType=text/html"`
	TextXML                       []byte                               `request:"mediaType=text/xml"`
}

type OrderAPIChangeShippingDetailsRequest struct {
	QueryParams OrderAPIChangeShippingDetailsQueryParams
	Headers     OrderAPIChangeShippingDetailsHeaders
	Request     OrderAPIChangeShippingDetailsRequests
}

type OrderAPIChangeShippingDetailsResponse struct {
	ContentType string
	StatusCode  int64
}
