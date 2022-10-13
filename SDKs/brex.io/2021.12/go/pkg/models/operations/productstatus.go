package operations

import (
	"openapi/pkg/models/shared"
)

type ProductStatusPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
}

type ProductStatusSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type ProductStatusRequest struct {
	PathParams ProductStatusPathParams
	Security   ProductStatusSecurity
}

type ProductStatusResponse struct {
	ContentType                            string
	ProductStatus200ApplicationJSONAny     *interface{}
	ProductStatusDefaultApplicationJSONAny *interface{}
	StatusCode                             int64
}
