package operations

import (
	"openapi/pkg/models/shared"
)

type TaxRatesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TaxRatesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TaxRatesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TaxRatesAddRequest struct {
	QueryParams TaxRatesAddQueryParams
	Headers     TaxRatesAddHeaders
	Request     shared.TaxRate `request:"mediaType=application/json"`
	Security    TaxRatesAddSecurity
}

type TaxRatesAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateTaxRateResponse   *shared.CreateTaxRateResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
