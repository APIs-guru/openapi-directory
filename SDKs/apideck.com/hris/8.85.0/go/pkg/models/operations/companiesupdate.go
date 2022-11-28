package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompaniesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type CompaniesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesUpdateRequest struct {
	PathParams  CompaniesUpdatePathParams
	QueryParams CompaniesUpdateQueryParams
	Headers     CompaniesUpdateHeaders
	Request     shared.HrisCompanyInput `request:"mediaType=application/json"`
	Security    CompaniesUpdateSecurity
}

type CompaniesUpdateResponse struct {
	BadRequestResponse        *shared.BadRequestResponse
	ContentType               string
	NotFoundResponse          *shared.NotFoundResponse
	PaymentRequiredResponse   *shared.PaymentRequiredResponse
	StatusCode                int64
	UnauthorizedResponse      *shared.UnauthorizedResponse
	UnexpectedErrorResponse   *shared.UnexpectedErrorResponse
	UnprocessableResponse     *shared.UnprocessableResponse
	UpdateHrisCompanyResponse *shared.UpdateHrisCompanyResponse
}
