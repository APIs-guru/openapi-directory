package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompaniesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompaniesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompaniesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesDeleteRequest struct {
	PathParams  CompaniesDeletePathParams
	QueryParams CompaniesDeleteQueryParams
	Headers     CompaniesDeleteHeaders
	Security    CompaniesDeleteSecurity
}

type CompaniesDeleteResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	DeleteHrisCompanyResponse *shared.DeleteHrisCompanyResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
