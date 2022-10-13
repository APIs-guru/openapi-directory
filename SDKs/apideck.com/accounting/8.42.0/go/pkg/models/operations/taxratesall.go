package operations

import (
	"openapi/pkg/models/shared"
)

type TaxRatesAllQueryParams struct {
	Cursor *string                `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.TaxRatesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                  `queryParam:"style=form,explode=true,name=raw"`
}

type TaxRatesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TaxRatesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TaxRatesAllRequest struct {
	QueryParams TaxRatesAllQueryParams
	Headers     TaxRatesAllHeaders
	Security    TaxRatesAllSecurity
}

type TaxRatesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetTaxRatesResponse     *shared.GetTaxRatesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
