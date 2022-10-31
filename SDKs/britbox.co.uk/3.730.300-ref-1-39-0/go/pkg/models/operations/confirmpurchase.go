package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmPurchasePathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type ConfirmPurchaseQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ConfirmPurchaseSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ConfirmPurchaseRequest struct {
	PathParams  ConfirmPurchasePathParams
	QueryParams ConfirmPurchaseQueryParams
	Request     shared.ItvPurchaseRequest `request:"mediaType=application/json"`
	Security    ConfirmPurchaseSecurity
}

type ConfirmPurchaseResponse struct {
	ContentType  string
	ItvPurchase  *shared.ItvPurchase
	ServiceError *shared.ServiceError
	StatusCode   int64
}
