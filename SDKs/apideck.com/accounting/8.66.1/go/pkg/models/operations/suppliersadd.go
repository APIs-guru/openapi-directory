package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SuppliersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type SuppliersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SuppliersAddRequest struct {
	QueryParams SuppliersAddQueryParams
	Headers     SuppliersAddHeaders
	Request     shared.Supplier `request:"mediaType=application/json"`
	Security    SuppliersAddSecurity
}

type SuppliersAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateSupplierResponse  *shared.CreateSupplierResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
