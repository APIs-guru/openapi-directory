package operations

import (
	"openapi/pkg/models/shared"
)

type GetPurchasesQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type GetPurchasesSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetPurchasesRequest struct {
	QueryParams GetPurchasesQueryParams
	Security    GetPurchasesSecurity
}

type GetPurchasesResponse struct {
	ContentType  string
	Purchases    []shared.Purchase
	ServiceError *shared.ServiceError
	StatusCode   int64
}
