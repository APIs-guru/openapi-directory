package operations

import (
	"openapi/pkg/models/shared"
)

type TaxRatesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaxRatesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TaxRatesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TaxRatesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TaxRatesOneRequest struct {
	PathParams  TaxRatesOnePathParams
	QueryParams TaxRatesOneQueryParams
	Headers     TaxRatesOneHeaders
	Security    TaxRatesOneSecurity
}

type TaxRatesOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetTaxRateResponse      *shared.GetTaxRateResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
