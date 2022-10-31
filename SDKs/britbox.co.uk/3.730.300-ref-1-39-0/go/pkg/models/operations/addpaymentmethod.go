package operations

import (
	"openapi/pkg/models/shared"
)

type AddPaymentMethodQueryParams struct {
	Ff   []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
	Lang *string                   `queryParam:"style=form,explode=true,name=lang"`
}

type AddPaymentMethodSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type AddPaymentMethodRequest struct {
	QueryParams AddPaymentMethodQueryParams
	Request     shared.AddPaymentMethodRequest `request:"mediaType=application/json"`
	Security    AddPaymentMethodSecurity
}

type AddPaymentMethodResponse struct {
	ContentType   string
	PaymentMethod *shared.PaymentMethod
	ServiceError  *shared.ServiceError
	StatusCode    int64
}
