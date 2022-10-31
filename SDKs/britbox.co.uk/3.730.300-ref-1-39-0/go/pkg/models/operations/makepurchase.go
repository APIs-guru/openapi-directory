package operations

import (
	"openapi/pkg/models/shared"
)

type MakePurchaseQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type MakePurchaseSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type MakePurchaseRequest struct {
	QueryParams MakePurchaseQueryParams
	Request     shared.PurchaseRequest `request:"mediaType=application/json"`
	Security    MakePurchaseSecurity
}

type MakePurchaseResponse struct {
	ContentType  string
	Entitlement  *shared.Entitlement
	ServiceError *shared.ServiceError
	StatusCode   int64
}
