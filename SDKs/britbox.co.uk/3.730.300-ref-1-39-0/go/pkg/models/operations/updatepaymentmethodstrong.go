package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePaymentMethodStrongPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type UpdatePaymentMethodStrongQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type UpdatePaymentMethodStrongSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type UpdatePaymentMethodStrongRequest struct {
	PathParams  UpdatePaymentMethodStrongPathParams
	QueryParams UpdatePaymentMethodStrongQueryParams
	Request     shared.ItvUpdatePaymentStrongRequest `request:"mediaType=application/json"`
	Security    UpdatePaymentMethodStrongSecurity
}

type UpdatePaymentMethodStrongResponse struct {
	ContentType  string
	ServiceError *shared.ServiceError
	StatusCode   int64
}
