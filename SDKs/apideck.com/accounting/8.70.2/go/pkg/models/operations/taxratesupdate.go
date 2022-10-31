package operations

import (
	"openapi/pkg/models/shared"
)

type TaxRatesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TaxRatesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TaxRatesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type TaxRatesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TaxRatesUpdateRequest struct {
	PathParams  TaxRatesUpdatePathParams
	QueryParams TaxRatesUpdateQueryParams
	Headers     TaxRatesUpdateHeaders
	Request     shared.TaxRate `request:"mediaType=application/json"`
	Security    TaxRatesUpdateSecurity
}

type TaxRatesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateTaxRateResponse   *shared.UpdateTaxRateResponse
}
