package operations

import (
	"openapi/pkg/models/shared"
)

type DepartmentsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DepartmentsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type DepartmentsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DepartmentsAddRequest struct {
	QueryParams DepartmentsAddQueryParams
	Headers     DepartmentsAddHeaders
	Request     shared.Department `request:"mediaType=application/json"`
	Security    DepartmentsAddSecurity
}

type DepartmentsAddResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	CreateDepartmentResponse *shared.CreateDepartmentResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
