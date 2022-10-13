package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3OrdersIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3OrdersIDHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3OrdersIDRequest struct {
	PathParams GetV3OrdersIDPathParams
	Headers    GetV3OrdersIDHeaders
}

type GetV3OrdersIDResponse struct {
	ContentType string
	OrderDetail *shared.OrderDetail
	StatusCode  int64
}
