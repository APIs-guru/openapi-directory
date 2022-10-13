package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserStorePurchasesQueryParams struct {
	IdentityCookie float64 `queryParam:"style=form,explode=true,name=identity_cookie"`
}

type GetUserStorePurchasesSecurity struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetUserStorePurchasesRequest struct {
	QueryParams GetUserStorePurchasesQueryParams
	Security    GetUserStorePurchasesSecurity
}

type GetUserStorePurchasesResponse struct {
	ContentType string
	StatusCode  int64
	Ibl         *interface{}
}
