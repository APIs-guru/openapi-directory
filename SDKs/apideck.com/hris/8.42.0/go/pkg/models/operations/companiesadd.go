package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompaniesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesAddRequest struct {
	QueryParams CompaniesAddQueryParams
	Headers     CompaniesAddHeaders
	Request     shared.HrisCompany `request:"mediaType=application/json"`
	Security    CompaniesAddSecurity
}

type CompaniesAddResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	CreateHrisCompanyResponse *shared.CreateHrisCompanyResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
