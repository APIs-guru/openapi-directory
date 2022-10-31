package operations

import (
	"openapi/pkg/models/shared"
)

type TaxRatesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaxRatesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TaxRatesDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type TaxRatesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TaxRatesDeleteRequest struct {
	PathParams  TaxRatesDeletePathParams
	QueryParams TaxRatesDeleteQueryParams
	Headers     TaxRatesDeleteHeaders
	Security    TaxRatesDeleteSecurity
}

type TaxRatesDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteTaxRateResponse   *shared.DeleteTaxRateResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
