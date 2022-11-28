package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type CompaniesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesAddRequest struct {
	QueryParams CompaniesAddQueryParams
	Headers     CompaniesAddHeaders
	Request     shared.HrisCompanyInput `request:"mediaType=application/json"`
	Security    CompaniesAddSecurity
}

type CompaniesAddResponse struct {
	BadRequestResponse        *shared.BadRequestResponse
	ContentType               string
	CreateHrisCompanyResponse *shared.CreateHrisCompanyResponse
	NotFoundResponse          *shared.NotFoundResponse
	PaymentRequiredResponse   *shared.PaymentRequiredResponse
	StatusCode                int64
	UnauthorizedResponse      *shared.UnauthorizedResponse
	UnexpectedErrorResponse   *shared.UnexpectedErrorResponse
	UnprocessableResponse     *shared.UnprocessableResponse
}
