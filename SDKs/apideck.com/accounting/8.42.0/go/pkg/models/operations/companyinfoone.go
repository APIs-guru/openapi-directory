package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyInfoOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type CompanyInfoOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompanyInfoOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyInfoOneRequest struct {
	QueryParams CompanyInfoOneQueryParams
	Headers     CompanyInfoOneHeaders
	Security    CompanyInfoOneSecurity
}

type CompanyInfoOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetCompanyInfoResponse  *shared.GetCompanyInfoResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
