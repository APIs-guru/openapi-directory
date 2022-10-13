package operations

import (
	"openapi/pkg/models/shared"
)

type DepartmentsAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type DepartmentsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type DepartmentsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DepartmentsAllRequest struct {
	QueryParams DepartmentsAllQueryParams
	Headers     DepartmentsAllHeaders
	Security    DepartmentsAllSecurity
}

type DepartmentsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetDepartmentsResponse  *shared.GetDepartmentsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
