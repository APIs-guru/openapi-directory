package operations

import (
	"openapi/pkg/models/shared"
)

type CompaniesAllQueryParams struct {
	Cursor *string                 `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.CompaniesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                   `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.CompaniesSort   `queryParam:"style=deepObject,explode=true,name=sort"`
}

type CompaniesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type CompaniesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompaniesAllRequest struct {
	QueryParams CompaniesAllQueryParams
	Headers     CompaniesAllHeaders
	Security    CompaniesAllSecurity
}

type CompaniesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetCompaniesResponse    *shared.GetCompaniesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
