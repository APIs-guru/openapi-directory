package operations

import (
	"openapi/pkg/models/shared"
)

type RemovePaymentMethodPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RemovePaymentMethodQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type RemovePaymentMethodSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type RemovePaymentMethodRequest struct {
	PathParams  RemovePaymentMethodPathParams
	QueryParams RemovePaymentMethodQueryParams
	Security    RemovePaymentMethodSecurity
}

type RemovePaymentMethodResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
