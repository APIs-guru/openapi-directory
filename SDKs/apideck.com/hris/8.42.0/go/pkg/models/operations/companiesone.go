package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompaniesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompaniesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesOneRequest struct {
	PathParams  CompaniesOnePathParams
	QueryParams CompaniesOneQueryParams
	Headers     CompaniesOneHeaders
	Security    CompaniesOneSecurity
}

type CompaniesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetHrisCompanyResponse  *shared.GetHrisCompanyResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
